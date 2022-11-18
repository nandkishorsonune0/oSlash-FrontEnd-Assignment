import React, { useState } from "react";
import { Modal, ModalContent } from "@chakra-ui/react";
import { InviteSearch } from "./InviteSearch";
import { people, groups } from "../../data";
import _ from "lodash";

interface InviteModalProps {
  /**
   * is the modal visible
   */
  isOpen: boolean;
  /**
   * func to run on close of modal
   */
  onClose: () => void;
  /**
   * available access levels
   */
  accessLevels: Array<string>;
}

export const InviteModal = ({
  isOpen,
  onClose,
  accessLevels,
}: InviteModalProps) => {
  const [userList, setUserList] = useState<
    Array<{
      name: string;
      imgSrc?: string;
      id: string;
      email: string;
      access?: string;
      members?: number;
    }>
  >([...people, ...groups]);

  const [selectedInvitees, setSelectedInvitees] = useState<
    Array<{
      name: string;
      imgSrc?: string;
      id: string;
      email: string;
      access?: string;
      members?: number;
    }>
  >([]);

  const [peopleLength, setPeopleLength] = useState<number>(people.length);

  const [highlighter, setHighlighter] = useState<number>(-1);

  /**
   * Func to handle key press while selecting users
   * and highlighting them
   * @param event event instace on keydown
   */
  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;

    if (key === "ArrowDown") {
      if (highlighter === -1) {
        setHighlighter(0);
      } else if (highlighter !== userList.length - 1) {
        setHighlighter(highlighter + 1);
      }
    } else if (key === "ArrowUp") {
      if (highlighter === -1) {
        setHighlighter(0);
      } else if (highlighter !== 0) {
        setHighlighter(highlighter - 1);
      }
    } else if (key === "Enter" && highlighter !== -1) {
      if (
        !selectedInvitees.some(
          (invitee) => invitee.id === userList[highlighter].id
        )
      ) {
        const tempList = [...selectedInvitees, userList[highlighter]];
        setSelectedInvitees(tempList);
      }
    }
  };

  /**
   * Func to add highlited user to selected list to be invited
   * @param user the selected user
   */
  const userClicked = (user: {
    name: string;
    imgSrc?: string;
    id: string;
    email: string;
    access?: string;
    members?: number;
  }) => {
    if (!selectedInvitees.some((invitee) => invitee.id === user.id)) {
      const tempList = [...selectedInvitees, user];
      setSelectedInvitees(tempList);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <div
          onKeyDown={keyPressHandler}
          className="w-full !p-0 border-gray-200 rounded-md shadow-lg outline-none"
        >
          <InviteSearch
            setUserList={setUserList}
            setPeopleLength={setPeopleLength}
            selectedInvitees={selectedInvitees}
            setSelectedInvitees={setSelectedInvitees}
            accessLevels={accessLevels}
            onClose={onClose}
          />
          <div className="border-y border-gray-200 px-4 px2.5 bg-white pb-2">
            {userList.map((user, index) => {
              return (
                <div key={user.id}>
                  {index === 0 ? (
                    <div className="my-2">
                      <span className="text-label text-gray-700 font-semibold">
                        Select a person
                      </span>
                    </div>
                  ) : (
                    index === peopleLength && (
                      <div className="my-2">
                        <span className="text-label text-gray-700 font-semibold">
                          Select a group
                        </span>
                      </div>
                    )
                  )}
                  <div
                    onClick={() => userClicked(user)}
                    onMouseEnter={() => setHighlighter(index)}
                    className={`flex items-center p-2 rounded-md cursor-pointer ${
                      highlighter === index ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <img
                      className={`w-7 h-7 mr-2 ${
                        user.imgSrc ? "rounded-full" : "rounded-md"
                      } object-fill`}
                      alt="oslash user"
                      src={
                        user.imgSrc ||
                        `https://ui-avatars.com/api/?name=${user.name}`
                      }
                    />
                    <div className="flex flex-col">
                      <span className="text-base">{user.name}</span>
                      <span className="text-xs text-gray-400">
                        {user.email}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center bg-gray-100 px-4 py-2.5 rouded-b-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
            <span className="font-normal text-gray-400 text-sm">
              learn about sharing
            </span>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};
