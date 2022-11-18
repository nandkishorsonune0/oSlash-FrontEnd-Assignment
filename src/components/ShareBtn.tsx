import React from "react";
import { IconBtn } from "./Icon";
import "./shareBtn.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * custom style object
   */
  customStyle?: object;
}

/**
 * Primary UI component for user interaction
 */
export const ShareBtn = ({
  primary = true,
  backgroundColor,
  label,
  customStyle,
  ...props
}: ButtonProps) => {
  const mode = primary ? "share-button--primary" : "share-button--secondary";
  return (
    <button
      type="button"
      className={["share-button", mode].join(" ")}
      style={customStyle}
      {...props}
    >
      {label}
      <IconBtn margin={"0px 10px"} color="white" size={20} />
    </button>
  );
};
