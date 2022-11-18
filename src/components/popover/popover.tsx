import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Button,
  Switch,
} from "@chakra-ui/react";
import { IconBtn } from "../Icon";
import { InviteSurface } from "../invites/InviteSurface";
import { InviteModal } from "../invites/InviteModal";
import { useAppState } from "../../Shared/context";

interface PopoverProps {
  /**
   * available access levels
   */
  accessLevels: Array<string>;
  /**
   * list of individuals
   */
  people: Array<{
    name: string;
    imgSrc?: string;
    id: string;
    email: string;
    access?: string;
    members?: number;
  }>;
  /**
   * list of groups
   */
  groups: Array<{
    name: string;
    imgSrc?: string;
    id: string;
    email: string;
    access?: string;
    members?: number;
  }>;
}

export const PopoverCP = ({ accessLevels }: PopoverProps) => {
  const [showSharePopover, setShowSharePopover] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);

  const openInviteModal = () => {
    setShowInviteModal(true);
  };

  const { invitedUsers }: any = useAppState();
  return (
    <>
      <Popover
        variant="responsive"
        placement="bottom-start"
        isOpen={showSharePopover}
        closeOnBlur={false}
        onClose={() => setShowSharePopover(false)}
      >
        <PopoverTrigger>
          <Button
            colorScheme={"mygray"}
            className="text-white"
            onClick={() => setShowSharePopover(!showSharePopover)}
          >
            Share <IconBtn margin={"0px 10px"} color="white" size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="">
          <PopoverHeader className="flex justify-between items-center px-2">
            <div className="flex flex-row item-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12"
                color="#6B7280"
              >
                <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="flex flex-col ml mr-20 items-start">
                <span className="text-base font-semibold">Share to web</span>
                <span className="font-normal text-gray-400 text-sm">
                  Publish and share link with anyone
                </span>
              </div>
            </div>
            <Switch className="" />
          </PopoverHeader>
          <PopoverBody className="px-2">
            {/* <InputGroup className="flex flex-row items-center rounded-md my-4 border  hover:border-indigo-500 border-gray-200">
            <Input
              focusBorderColor="border-gray-200"
              className="rounded-l-md rounded-none cursor-pointer border-1 border-gray-200"
              placeholder="People, emails, groups"
            />
            <InputRightAddon
              _after={{ boxShadow: "none" }}
              _focus={{ boxShadow: "none" }}
              className="cursor-pointer border-none border-gray-200"
              children="Invite"
            />
          </InputGroup> */}
            <div
              onClick={openInviteModal}
              className="flex flex-row items-center rounded-md my-4 border  hover:border-indigo-500 border-gray-200"
            >
              <input
                type="text"
                placeholder="People, emails, groups"
                className="caret-transparent grow px-2 py-2 outline-none rounded-l-md cursor-pointer"
              ></input>
              <button className="grow-0 px-3 py-2 border-l border-gray-200 rounded-r-md bg-[#f9fafb]">
                Invite
              </button>
            </div>

            <InviteSurface accessLevels={accessLevels} data={invitedUsers} />
          </PopoverBody>
          <PopoverFooter className="flex justify-between py-6 px-2">
            <div className="flex">
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
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 mr-2 font-black"
                color={"#111827"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>

              <span className="font-semibold text-sm">Copy link</span>
            </div>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
      <InviteModal
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        accessLevels={accessLevels}
      />
    </>
  );
};
