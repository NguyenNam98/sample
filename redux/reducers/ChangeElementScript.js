import { CHANGE_CREAT_BUTTON_SCRIPT, CHANGE_MODIFY_BUTTON_SCRIPT } from '@jumbo/constants/ActionTypes';

let init = {
    isModifyBtn: false,
    nameElement :"Nhập tên kịch bản:"
};

export default (state = init, action) => {
    switch (action.type) {
        case CHANGE_MODIFY_BUTTON_SCRIPT: {
            return {
              isModifyBtn: true,
              nameElement:"Tên kịch bản:"
            };
        }
        case CHANGE_CREAT_BUTTON_SCRIPT: {
          return {
            isModifyBtn: false,
            nameElement :"Nhập tên kịch bản:"
          };
      }
        default:
            return state;
    }
};
