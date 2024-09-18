import React from "react";

function DropIndicators({ beforeId, column }) {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-500 opacity-0"
    ></div>
  );
}

export default DropIndicators;