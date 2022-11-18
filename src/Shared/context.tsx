import React, { useContext, useReducer } from "react";
import reducer from "../Reducers/reducer";

/**
 * action types defined to be case matched in reducer
 */
export const UPDATE_INVITED_USERS = "UpdateInvitedUsers";
export const UPDATE_ACCESS_LEVEL = "UpdateAccessLevel";
export const DELETE_INVITED_USER = "DeleteInvitedUser";

/**
 * interface for the default value of context
 */
export interface ContextInterface {
  invitedList: Array<{
    name: string;
    imgSrc?: string;
    id: string;
    email: string;
    members?: number;
    access: string;
  }>;
}

/**
 * Creating a type for the expected action in reducer
 */
export type action = {
  type: string;
  payload: object | string | number | Array<ContextInterface> | any;
};

/**
 * Creating context for app
 */
const AppContext = React.createContext({});

type Props = {
  children: React.ReactNode;
};

/**
 * creating a component that can be used to wrap our app with context
 * @param children
 * @returns React Node wrapper that provides context to children
 */
export function AppState({ children }: Props) {
  /**
   * Default values to be used when context created i.e initial values
   */
  const initialValues: ContextInterface = {
    invitedList: [
      {
        name: "Everyone at OSlash",
        imgSrc: "/assets/oslash.png",
        id: "everyoneOslash",
        email: "everyone@oslash.com",
        access: "No access",
        members: 25,
      },
    ],
  };

  const [state, dispatch] = useReducer(reducer, initialValues);

  /**
   * Action to create list of invited users from selections
   * @param invitees array of users invited
   */
  const updateInvitedUsers = (invitees: ContextInterface) => {
    dispatch({
      type: UPDATE_INVITED_USERS,
      payload: invitees,
    });
  };

  const UpdateAccessLevel = (invitees: ContextInterface) => {
    dispatch({
      type: UPDATE_INVITED_USERS,
      payload: invitees,
    });
  };

  /**
   * action to delete a user from invited list
   * @param index index of user to be deleted
   */
  const deleteInvitedUser = (index: number) => {
    dispatch({
      type: DELETE_INVITED_USER,
      payload: index,
    });
  };

  /**
   * Similar to redux store to access all available methods from Context API
   */
  const store = {
    updateInvitedUsers,
    UpdateAccessLevel,
    invitedUsers: state.invitedList,
    deleteInvitedUser,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

/**
 * Hook helps access context in children
 * @returns custom hook
 */
export function useAppState() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("UseAppState must be used inside a Context Provider");

  return context;
}
