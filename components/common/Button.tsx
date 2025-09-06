
import React from "react";
import { ButtonProps } from "../../interface";

// Button component definition, typed with ButtonProps interface
export default function Button({
  label,           // The text to display on the button
  onClick,         // The function to call when the button is clicked
  disabled = false, // If true, the button will be disabled (default: false)
  type = "button"   // The button type, e.g., "button", "submit", or "reset" (default: "button")
}: ButtonProps) {
  // Render the native HTML <button> element with the given props
  return (
    <button
      onClick={onClick}      // Attach the onClick handler
      disabled={disabled}    // Disable the button if 'disabled' is true
      type={type}            // Set the button's type attribute
    >
      {label}                // Render the button's label
    </button>
  );
}