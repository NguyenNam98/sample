import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const Dashboards = ({ match }) => {
    const requestedUrl = match.url.replace(/\/$/, '');
    return (
        <Suspense fallback={<PageLoader />}>
            <Switch>
                <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/manage-account-facebook`} />
                <Route
                    path={`${requestedUrl}/manage-account-facebook`}
                    component={lazy(() => import('./manage-account-facebook'))}
                />
                <Route path={`${requestedUrl}/manage-script`} component={lazy(() => import('./manage-script'))} />
                {/* <Route path={`${requestedUrl}/manage-proxy`} component={lazy(() => import('./manage-proxy'))}/> */}
                <Route path={`${requestedUrl}/manage-posts`} component={lazy(() => import('./manage-posts'))} />
                <Route component={lazy(() => import('../Pages/404'))} />
            </Switch>
        </Suspense>
    );
};

export default Dashboards;
