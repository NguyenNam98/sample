import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import General from './General';
import InterRactAccount from './InteractAccount';
import InteractFriend from './InteractFriend';
import Error404 from './Pages/404';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Notification from 'components/Notification';
import ModifyAccount from './modifyAccount';
import InteractGroup from './interactGroup';
import InitAllEvent from 'components/InitAllEvent';
// import ForgotPasswordPage from "./Auth/ForgotPassword";

const Routes = () => {
    const { authUser } = useSelector(({ auth }) => auth);
    const location = useLocation();
    const dispatch = useDispatch();

    if (location.pathname === '' || location.pathname === '/') {
        return <Redirect to={'/general/manage-account-facebook'} />;
    } else if (authUser && location.pathname === '/signin') {
        return <Redirect to={'/general/manage-account-facebook'} />;
    }

    return (
        <React.Fragment>
            <Switch>
                <Route path="/signin" component={Login} />
                <Route path="/signup" component={Register} />
                {/* <Route path="/forgot-password" component={ForgotPasswordPage} /> */}
                {!authUser ? (
                    <Redirect to="/signin" />
                ) : (
                    <InitAllEvent>
                        <Switch>
                            <Route path="/general" component={General} />
                            <Route path="/interact" component={InterRactAccount} />
                            <Route path="/interactFriend" component={InteractFriend} />
                            <Route path="/modifyAccount" component={ModifyAccount} />
                            <Route path="/interactGroup" component={InteractGroup} />
                        </Switch>
                    </InitAllEvent>
                )}
                <Route component={Error404} />
            </Switch>
        </React.Fragment>
    );
};

export default Routes;
