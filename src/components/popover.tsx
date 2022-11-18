import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";

interface PopoverProps {
  /**
   * Where the popver showup related to button
   */
  placement?: any;
  /**
   * bool for visibility of popover
   */
  sharePopoverVisibility: boolean;
  /**
   * function to run on popover close
   */
  sharePopoverOnClose?: () => void;
}

export const SharePopover = ({
  placement = "right",
  sharePopoverVisibility,
  sharePopoverOnClose,
  ...props
}: PopoverProps) => {
  return (
    <Popover
      placement={"bottom-start"}
      isOpen={sharePopoverVisibility}
      onClose={sharePopoverOnClose}
    >
      <PopoverArrow />
      <PopoverContent>
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
