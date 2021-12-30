import { CHANGE_CREAT_BUTTON_SCRIPT,CHANGE_MODIFY_BUTTON_SCRIPT } from "@jumbo/constants/ActionTypes";

export const changeCreateButton = () => {
  return {type:CHANGE_CREAT_BUTTON_SCRIPT,}
};
export const changeModifyButton = () => {
  return {type:CHANGE_MODIFY_BUTTON_SCRIPT}
};