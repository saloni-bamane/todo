import React from "react";
import Board from "./components/Board";
import Theme from "./components/Theme";

function App() {
  return (
    <div className="bg-background text-textPrimary h-screen w-full">
      <Theme />
      <Board />
    </div>
  );
}

export default App;
