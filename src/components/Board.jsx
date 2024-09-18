import React, { useState } from "react";
import Column from "./Column";
import DeleteCard from "./DeleteCard";

function Board() {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  const columnData = [
    {
      title: "Backlog",
      column: "backlog",
      headingColor: "text-nuetral-500",
      id: "1",
    },
    { title: "TODO", column: "todo", headingColor: "text-yellow-200", id: "2" },
    {
      title: "In Progress",
      column: "doing",
      headingColor: "text-blue-200",
      id: "3",
    },
    {
      title: "Complete",
      column: "done",
      headingColor: "text-emerald-200",
      id: "4",
    },
  ];
  return (
    <>
      <div className="flex h-full w-full gap-3 overflow-y-auto p-12">
        {columnData.map((column) => (
          <Column
            title={column.title}
            column={column.column}
            headingColor={column.headingColor}
            cards={cards}
            setCards={setCards}
            key={column.id}
          />
        ))}
        <DeleteCard setCards={setCards} />
      </div>
    </>
  );
}

const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
  { title: "SOX compliance checklist", id: "2", column: "backlog" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
  },
  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];

export default Board;
