import { SET_OPEN_POPUP, SET_CLOSE_POPUP } from '@jumbo/constants/ActionTypes';

let init = {
  isOpenPopupInfoAccount: false,
    
};

export default (state = init, action) => {
    switch (action.type) {
        case SET_OPEN_POPUP: {
            return {
              isOpenPopupInfoAccount:true
            };
        }
        case SET_CLOSE_POPUP: {
          return {
            isOpenPopupInfoAccount:false
          };
      }
        default:
            return state;
    }
};
