import React from "react";

export default function Button({ title, onClick, className, type = 'button', disabled = '' }) {
  const styles =
    " border transition-all border-orange-400 hover:bg-orange-500 py-2 px-6 rounded ";
  return (
    <input
      type={type}
      className={className + styles}
      onClick={onClick}
      value={title}
      disabled={disabled}
    ></input>
  );
}
