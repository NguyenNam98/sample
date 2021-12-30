import { ADD_NEW_ACTION, DELETE_ACTION, SET_ALL_ACTION, UPDATE_ACTION } from '@jumbo/constants/ActionTypes';

let init = {
    actions: [],
};

export default (state = init, action) => {
    switch (action.type) {
        case ADD_NEW_ACTION: {
            return {
                actions: [...state.actions, action.payload],
            };
        }
        case DELETE_ACTION: {
            return {
                actions: [...state.actions.slice(0, action.index), ...state.actions.slice(action.index + 1)],
            };
        }
        case UPDATE_ACTION: {
            return {
                actions: [...state.actions.slice(0, action.index), action.payload, ...state.actions.slice(action.index + 1)],
            };
        }
        case SET_ALL_ACTION: {
          return {
              actions: [...action.payload],
          };
      }
        default:
            return state;
    }
};
