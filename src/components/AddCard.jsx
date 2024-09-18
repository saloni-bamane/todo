import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { div } from "framer-motion/m";

function AddCard({ column, setCards }) {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  function handleSumbit(e) {
    e.preventDefault();
    if (!text.trim().length) return;
    const card = {
      title: text.trim(),
      id: crypto.randomUUID(),
      column,
    };
    setCards((pv) => [...pv, card]);
    setAdding(false);
    setText("");
  }
  return (
    <>
      {adding ? (
        <motion.form id="form-id" layout onSubmit={handleSumbit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task"
            className="text-textPrimary w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="text-textSecondary hover:text-textPrimary px-3 py-1.5 text-xs transition-colors"
            >
              Close
            </button>
            <button
              type="submit"
              className="text-buttonTextColor bg-buttonColor flex items-center gap-1.5 rounded px-3 py-1.5 text-xs"
            >
              <span>Add Card</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <div className="pb-12">
          <motion.button
            layout
            onClick={() => setAdding(true)}
            className="text-textSecondary hover:text-textPrimary flex w-full items-center gap-1.5 px-3 py-1.5 text-xs transition-colors"
          >
            <span>Add Card</span>
            <FiPlus />
          </motion.button>
        </div>
      )}
    </>
  );
}

export default AddCard;
