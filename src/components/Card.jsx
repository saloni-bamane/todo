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
        className="bg-cardBackground border-borderColor cursor-grab rounded border p-3 active:cursor-grabbing"
      >
        <p className="text-textPrimary text-sm">{title}</p>
      </motion.div>
    </>
  );
}

export default Card;
