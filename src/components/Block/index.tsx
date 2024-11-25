import React from "react";
import "./index.css";

interface BlockProps {
  className?: string; 
  onClick?: () => void;
  children?: React.ReactNode; 
}

const Block: React.FC<BlockProps> = ({ className = "", onClick, children }) => {
  return (
    <div className={`block ${className}`.trim()} onClick={onClick}>
      {children}
    </div>
  );
};

export default Block;
