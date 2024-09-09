import React from "react";
import DropIndicators from "./DropIndicators";
import { motion } from "framer-motion";
function Card({ title, id, column, handleDragStart }) {
  return (
    <>
      <DropIndicators beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
}

export default Card;
