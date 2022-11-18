import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

interface MenuProps {
  /**
   * classes for the menu
   */
  classNames: string;
  /**
   * access level of invitee
   */
  access: string;
  /**
   * available access levels
   */
  accessLevels: Array<string>;
  /**
   * function to update access level
   */
  setAccess: (level: string, inviteIndex?: number) => void;
  /**
   * invitee index
   */
  inviteIndex?: number;
}

export const AccessMenu = ({
  classNames,
  access,
  accessLevels,
  setAccess,
  inviteIndex,
}: MenuProps) => {
  const [accessLevel, setAccessLevel] = useState(access);

  useEffect(() => {
    setAccess(accessLevel, inviteIndex);
  }, [accessLevel]);

  return (
    <div className={[classNames, "cursor-pointer"].join(" ")}>
      <Menu placement="bottom">
        <MenuButton>
          {
            <div className="flex flex-row items-center">
              <span
                className={`font-normal text-xs ${
                  accessLevel === "No access" ? "text-red-600" : "text-gray-500"
                }`}
              >
                {accessLevel}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-2 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          }
        </MenuButton>
        <MenuList>
          {accessLevels.map((level) => (
            <MenuItem
              className={`text-sm ${
                level === "No access" ? "text-red-600" : "text-gray-500"
              }`}
              onClick={() => setAccessLevel(level)}
            >
              {level}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};
