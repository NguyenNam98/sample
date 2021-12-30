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
          to={`${requestedUrl}/surf-newfeed`}
        />
        <Route
          path={`${requestedUrl}/surf-newfeed`}
          component={lazy(() => import("./surf-newfeed"))}
        />
        <Route
          path={`${requestedUrl}/comment`}
          component={lazy(() => import("./comment"))}
        />
        <Route
          path={`${requestedUrl}/reaction`}
          component={lazy(() => import("./reaction"))}
        />
        <Route
          path={`${requestedUrl}/share`}
          component={lazy(() => import("./sharePost"))}
        />
        <Route
          path={`${requestedUrl}/notifications`}
          component={lazy(() => import("./watchNotification"))}
        />
        <Route
          path={`${requestedUrl}/video`}
          component={lazy(() => import("./watchVideo"))}
        />
        <Route
          path={`${requestedUrl}/story`}
          component={lazy(() => import("./watchStory"))}
        />
        <Route
          path={`${requestedUrl}/posts`}
          component={lazy(() => import("./posting"))}
        />
        <Route component={lazy(() => import("../Pages/404"))} />
      </Switch>
    </Suspense>
  );
};

export default Interact;
