import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import PageLoader from "../../@jumbo/components/PageComponents/PageLoader";

const InteractGroup = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, "");
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect
          exact
          from={`${requestedUrl}/`}
          to={`${requestedUrl}/join-group`}
        />
        <Route
          path={`${requestedUrl}/join-group`}
          component={lazy(() => import("./joinGroup"))}
        />
      </Switch>
    </Suspense>
  );
};

export default InteractGroup;
