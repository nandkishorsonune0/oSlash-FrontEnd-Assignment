import React, { useState } from "react";
import { AccessMenu } from "../access/AccessMenu";
import { useAppState } from "../../Shared/context";
import { groups, people } from "../../data";

interface InviteSearchProps {
  /**
   * available access levels
   */
  accessLevels: Array<string>;
  /**
   * set user list effect
   */
  setUserList: (
    list: Array<{
      name: string;
      imgSrc?: string;
      id: string;
      email: string;
      access?: string;
      members?: number;
    }>
  ) => void;
  /**
   * effect to set length of people to seperate people from groups
   */
  setPeopleLength: (length: number) => void;
  /**
   * list of users selected to be invited
   */
  selectedInvitees: Array<{
    name: string;
    imgSrc?: string;
    id: string;
    email: string;
    access?: string;
    members?: number;
  }>;
  /**
   * effect to set selected invitees from list
   */
  setSelectedInvitees: (
    list: Array<{
      name: string;
      imgSrc?: string;
      id: string;
      email: string;
      access?: string;
      members?: number;
    }>
  ) => void;
  /**
   * close invite modal after inviting users
   */
  onClose: () => void;
}

export const InviteSearch = ({
  accessLevels,
  setPeopleLength,
  setSelectedInvitees,
  setUserList,
  selectedInvitees,
  onClose,
}: InviteSearchProps) => {
  const [access, setAccess] = useState("Full access");
  const getAccess = (level: string) => {
    setAccess(level);
  };

  const { updateInvitedUsers, deleteInvitedUser, invitedUsers }: any =
    useAppState();

  /**
   * Function searches users' name and email for
   * matches with search term provided
   * @param term string
   */
  const filterSearchResults = (term: string) => {
    let filteredPeople = people.filter(
      (v) => v.name.includes(term) || v.email.includes(term)
    );
    setPeopleLength(filteredPeople.length);

    let filteredGroups = groups.filter(
      (v) => v.name.includes(term) || v.email.includes(term)
    );
    setUserList([...filteredPeople, ...filteredGroups]);
  };

  const inviteClicked = () => {
    const listWithAccess = selectedInvitees.map((object) => {
      return { ...object, access: access };
    });
    updateInvitedUsers(listWithAccess);
    onClose();
  };

  return (
    <div className="flex items-center rounded-t-md justify-between px-4 py-2 bg-gray-100 z-0">
      <div className="flex flex-wrap grow">
        {selectedInvitees &&
          selectedInvitees.map((invitee, index) => {
            return (
              <div className="flex flex-row items-center px-2 bg-gray-200 rounded m-1">
                <span className="text-sm">{invitee?.name} </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 cursor-pointer ml-2"
                  onClick={() => {
                    selectedInvitees.splice(index, 1);
                    setSelectedInvitees([...selectedInvitees]);
                    deleteInvitedUser(
                      invitedUsers.findIndex(
                        (item: any) => item.id === invitee.id
                      )
                    );
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            );
          })}
        <input
          onChange={(e) => filterSearchResults(e.target.value)}
          className="w-full text-light bg-transparent outline-none text-sm"
          placeholder={
            selectedInvitees.length === 0
              ? "Search emails, names or groups"
              : ""
          }
        />
      </div>
      <div className="flex flex-row items-center grow-0 ">
        <AccessMenu
          classNames="grow-0 mx-2 w-max"
          access="Full access"
          accessLevels={accessLevels}
          setAccess={getAccess}
        />
        <button
          onClick={selectedInvitees.length > 0 ? inviteClicked : () => null}
          className="grow-0 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700"
        >
          Invite
        </button>
      </div>
    </div>
  );
};
