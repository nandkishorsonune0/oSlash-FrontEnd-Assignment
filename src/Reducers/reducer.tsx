import _ from "lodash";
import {
  action,
  ContextInterface,
  DELETE_INVITED_USER,
  UPDATE_ACCESS_LEVEL,
  UPDATE_INVITED_USERS,
} from "../Shared/context";

const reducer = (state: ContextInterface, action: action) => {
  switch (action.type) {
    case UPDATE_INVITED_USERS: {
      return {
        ...state,
        invitedList: _.uniqBy([...state.invitedList, ...action.payload], "id"),
      };
    }

    case UPDATE_ACCESS_LEVEL: {
      return {
        ...state,
        invitedList: [...state.invitedList, ...action.payload],
      };
    }
    case DELETE_INVITED_USER: {
      return {
        ...state,
        invitedList: [
          ...state.invitedList.slice(0, action.payload),
          ...state.invitedList.slice(action.payload + 1),
        ],
      };
    }

    default:
      return state;
  }
};

export default reducer;
