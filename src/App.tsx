import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ChooseSizeButton from "./components/ChooseSizeButton";
import ResetButton from "./components/ResetButton";

import SchulteTable from "./components/SchulteTable";

function App() {
  const [boardSize, setBoardSize] = useState<number>(5);
  const [nextNumber, setNextNumber] = useState<number>(1);
  const [reset, setReset] = useState<boolean>(false);

  const boardSizes: number[] = [3, 4, 5, 6, 7];

  const handleChangeOfBoardSize = (size: number) => {
    setBoardSize(size);
    setNextNumber(1);
  };

  const resetHandler = () => {
    setNextNumber(1);
    setBoardSize(boardSize);
    setReset(!reset);
  };

  return (
    <div className="w-96 mx-auto">
      <SchulteTable
        reset={reset}
        boardSize={boardSize}
        nextNumber={nextNumber}
        setter={setNextNumber}
      />
      <div className="flex my-1">
        <p className="">Следующее число:</p>
        <p>{nextNumber}</p>
      </div>

      <ResetButton onClick={resetHandler} />
      <div className="mx-auto flex w-full justify-around my-8 text-white">
        {boardSizes.map((size) => {
          if (size % 2 === 0) return;

          return (
            <>
              <ChooseSizeButton
                size={size}
                onClick={() => handleChangeOfBoardSize(size)}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
