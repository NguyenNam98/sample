import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import Common from "./Common";
import Auth from "./Auth";
import Accounts from "./Accounts";
import Notification from "./Notification";
import Scripts from "./Scripts";
import ActionsFacebook from "./ActionsFacebook";
import ChangeElementScript from "./ChangeElementScript";
import InfoAccountPopup from "./InfoAccountPopup";
import PostsFacebook from "./PostsFacebook";

export default history =>
  combineReducers({
    router: connectRouter(history),
    common: Common,
    auth: Auth,
    manageAccountFacebook: Accounts,
    notification: Notification,
    scripts: Scripts,
    actions:ActionsFacebook,
    elementInScript : ChangeElementScript,
    isOpenPopupInfoAccount: InfoAccountPopup,
    postsFacebook :PostsFacebook
  });
