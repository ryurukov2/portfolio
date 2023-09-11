import React from "react";
import { VscGithub } from "react-icons/vsc";
export function GhButton({ handleMouseLeaveCard, text, target}) {
  return (
    <button
      className="flex m-auto flex-row gap-2 flex-wrap justify-items-center justify-center items-center bg-black px-2 py-2 rounded-md"
      onClick={(e) => {
        e.stopPropagation();
        window.open(target, "_blank", "noreferrer");
      }}
      onMouseOver={(e) => {
        e.stopPropagation();
        handleMouseLeaveCard();
      }}
    >
      <VscGithub className="inline" />
      {text}
    </button>
  );
}
