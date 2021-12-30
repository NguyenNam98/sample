import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import PageLoader from "../../@jumbo/components/PageComponents/PageLoader";

const ModifyAccount = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, "");
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/2fa`} />
        <Route
          path={`${requestedUrl}/2fa`}
          component={lazy(() => import("./change2FA"))}
        />
        <Route
          path={`${requestedUrl}/password`}
          component={lazy(() => import("./changePassword"))}
        />
      </Switch>
    </Suspense>
  );
};

export default ModifyAccount;
