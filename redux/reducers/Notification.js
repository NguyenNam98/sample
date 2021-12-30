import {
  NOTIFICATION_ERROR,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_WARNING,
  NOTIFICATION_OFF
} from "../../@jumbo/constants/ActionTypes";

const INIT_STATE = {
  message: "",
  type: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case NOTIFICATION_ERROR: {
      return { ...state, message: action.payload, type: "error" };
    }
    case NOTIFICATION_WARNING: {
      return { ...state, message: action.payload, type: "warning" };
    }
    case NOTIFICATION_SUCCESS: {
      return { ...state, message: action.payload, type: "success" };
    }
    case NOTIFICATION_OFF: {
      return { ...state };
    }
    default:
      return state;
  }
};
