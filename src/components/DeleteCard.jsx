import React, { useState } from "react";
import { FaTrash, FaFire } from "react-icons/fa";

function DeleteCard({ setCards }) {
  const [active, setActive] = useState(false);
  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };
  const handleDrop = (e) => {
    const cardId = e.dataTransfer.getData("cardId");
    // console.log(cardId);
    setActive(false);

    setCards((pv) => pv.filter((card) => card.id != cardId));
  };
  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-700 bg-neutral-800 text-neutral-500"
      }`}
    >
      <span>
        {active ? <FaFire className="animate-bounce" /> : <FaTrash />}
      </span>
    </div>
  );
}

export default DeleteCard;
