import React from "react";
import { AccessMenu } from "../access/AccessMenu";

interface inviteProps {
  /**
   * list of invitees
   */
  data: Array<{
    name: string;
    imgSrc: string;
    id: string;
    email: string;
    access: string;
    members?: number;
  }>;
  /**
   * access levels
   */
  accessLevels: Array<string>;
}

export const InviteSurface = ({ data, accessLevels }: inviteProps) => {
  const updateAccess = (level: string, index?: number) => {
    if (typeof index !== "undefined") data[index].access = level;
  };
  return (
    <>
      {data.map((invite, index) => {
        return (
          <div className="flex flex-row items-center justify-between mt-3">
            <div className="flex flex-row items-center grow">
              <img
                className="w-10 h-10 rounded-full object-contain"
                src={
                  invite.imgSrc ||
                  `https://ui-avatars.com/api/?name=${invite.name}`
                }
                alt="oslash"
              />
              <div className="flex flex-col items-start mx-2">
                <span className="text-base text-gray-900 font-normal">
                  {invite.name}
                </span>
                <span className="text-sm text-gray-500">
                  {invite.members || invite.email}
                </span>
              </div>
            </div>

            <AccessMenu
              classNames="grow-0"
              access={invite.access}
              accessLevels={accessLevels}
              setAccess={updateAccess}
              inviteIndex={index}
            />
          </div>
        );
      })}
    </>
  );
};
