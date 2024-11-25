import React from "react";
import "./index.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`custom-button ${className || ""}`.trim()} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
