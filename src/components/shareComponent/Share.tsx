import React, { useState } from "react";
import { access } from "../../data";
import { SharePopover } from "../popover";
import { ShareBtn } from "../ShareBtn";

interface ShareProps {}

export const Share = ({}: ShareProps) => {
  const [openSharePopover, setOpenSharePopover] = useState(false);

  const clickShareBtn = () => {
    setOpenSharePopover(true);
  };

  return (
    <>
      <ShareBtn onClick={clickShareBtn} label="Share" />
      <SharePopover
        sharePopoverVisibility={openSharePopover}
        sharePopoverOnClose={() => setOpenSharePopover(false)}
      />
    </>
  );
};
