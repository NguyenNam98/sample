import { ADD_NEW_ACTION, DELETE_ACTION, SET_ALL_ACTION, UPDATE_ACTION } from "@jumbo/constants/ActionTypes";

export const addNewAction = (data) => {
  return {type:ADD_NEW_ACTION, payload: data}
};
export const deleteAction = (index) => {
  return {type:DELETE_ACTION, index: index}
};
export const updateAction = (data, index) => {
  return {type:UPDATE_ACTION, index: index, payload:data}
};
export const setAllAction =(data) =>{
  return {type: SET_ALL_ACTION, payload:data}
};
