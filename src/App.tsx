import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ChooseSizeButton from "./components/ChooseSizeButton";

import SchulteTable from "./components/SchulteTable";

function App() {
  const [boardSize, setBoardSize] = useState<number>(5);

  const boardSizes: number[] = [3, 4, 5, 6, 7];

  return (
    <div className="bg-slate-200">
      <SchulteTable boardSize={boardSize} />
      <div>
        {boardSizes.map((size) => {
          return (
            <ChooseSizeButton size={size} onClick={() => setBoardSize(size)} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
