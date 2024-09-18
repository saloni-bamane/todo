import React, { useState } from "react";
import Card from "./Card";
import DropIndicators from "./DropIndicators";
import AddCard from "./AddCard";

function Column({ title, column, headingColor, cards, setCards }) {
  const [active, setActive] = useState(false);
  const filteredCards = cards.filter((c) => c.column == column);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicators(e);
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
    clearHighlights();
  };

  const handleDrop = (e) => {
    setActive(false);
    clearHighlights();
    const cardId = e.dataTransfer.getData("cardId");
    const indicators = getIndicators();
    const { element } = getClosestIndicator(e, indicators);

    const before = element.dataset.before || "-1";
    if (before !== cardId) {
      let copy = [...cards];
      let cardTransfer = copy.find((c) => c.id === cardId);
      cardTransfer = { ...cardTransfer, column };
      copy = copy.filter((c) => c.id !== cardId);

      const moveBack = before === "-1";
      if (moveBack) {
        copy.push(cardTransfer);
      } else {
        const index = copy.findIndex((el) => el.id === before);
        copy.splice(index, 0, cardTransfer);
      }
      setCards(copy);
    }
  };

  const highlightIndicators = (e) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getClosestIndicator(e, indicators);

    el.element.style.opacity = 1;
  };

  const getIndicators = () => {
    const elements = document.querySelectorAll(`[data-column="${column}"]`);
    return Array.from(elements);
  };

  const getClosestIndicator = (e, indicators) => {
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + 30);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators.at(-1),
      },
    );
    return el;
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();
    indicators.forEach((element) => {
      element.style.opacity = "0";
    });
  };

  return (
    <>
      <div className="w-56 shrink-0">
        <div className="mb-3 flex items-center justify-between">
          <h3 className={`font-medium ${headingColor}`}>{title}</h3>
          <span className="text-sm text-neutral-400">
            {filteredCards.length}
          </span>
        </div>
        <div
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={`h-full w-full rounded transition-colors ${active ? "bg-cardBackground/80" : "bg-neutral-800/0"}`}
        >
          {filteredCards.map((card) => {
            return (
              <Card key={card.id} {...card} handleDragStart={handleDragStart} />
            );
          })}
          <DropIndicators beforeId={"-1"} column={column} />
          <AddCard column={column} setCards={setCards} />
        </div>
      </div>
    </>
  );
}

export default Column;
