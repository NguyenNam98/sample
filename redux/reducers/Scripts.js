import { GET_SCRIPTS } from "../../@jumbo/constants/ActionTypes";

const INIT_STATE = {
  dataScripts: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_SCRIPTS: {
      return {
        ...state,
        dataScripts: action.payload
      };
    }
    default:
      return state;
  }
};
