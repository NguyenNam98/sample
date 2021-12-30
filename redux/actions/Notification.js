import {
  NOTIFICATION_ERROR,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_WARNING,
  NOTIFICATION_OFF
} from "../../@jumbo/constants/ActionTypes";

export const notificationError = message => {
  return dispatch => {
    dispatch({
      type: NOTIFICATION_ERROR,
      payload: message
    });
  };
};
export const notificationWarning = message => {
  return dispatch => {
    dispatch({
      type: NOTIFICATION_WARNING,
      payload: message
    });
  };
};
export const notificationSuccess = message => {
  return dispatch => {
    dispatch({
      type: NOTIFICATION_SUCCESS,
      payload: message
    });
  };
};
export const notificationOff = () => {
  return dispatch => {
    dispatch({
      type: NOTIFICATION_OFF,
      payload: { message: "", type: "" }
    });
  };
};
