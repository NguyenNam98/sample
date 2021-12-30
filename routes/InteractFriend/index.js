import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import PageLoader from "../../@jumbo/components/PageComponents/PageLoader";

const Interact = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, "");
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect
          exact
          from={`${requestedUrl}/`}
          to={`${requestedUrl}/add-friend`}
        />
        <Route
          path={`${requestedUrl}/add-friend`}
          component={lazy(() => import("./addFriend"))}
        />
        <Route
          path={`${requestedUrl}/accept-invitation`}
          component={lazy(() => import("./acceptFriend"))}
        />
        <Route
          path={`${requestedUrl}/reject-invitation`}
          component={lazy(() => import("./rejectFriend"))}
        />
      </Switch>
    </Suspense>
  );
};

export default Interact;
