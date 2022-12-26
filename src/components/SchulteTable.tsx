import { useMemo, useState } from "react";
import CellOfTable from "./CellOfTable";

interface SchulteTableProps {
  boardSize: number;
  nextNumber: number;
  setter: (value: number) => void;
  reset: boolean;
}

const SchulteTable = ({
  boardSize,
  nextNumber,
  setter,
  reset,
}: SchulteTableProps) => {
  const board: number[] = useMemo(
    () =>
      Array.from({ length: boardSize ** 2 }, (_, i) => i + 1).sort(
        () => Math.random() - 0.5
      ),
    [boardSize, reset]
  );

  const handleClick = (value: number) => {
    if (value === nextNumber) setter(nextNumber + 1);
  };

  return (
    <div className="w-96 h-96 mx-auto">
      <div
        className={`grid grid-cols-${boardSize} grid-rows-${boardSize} w-full h-full m-auto`}
      >
        {board.map((value) => {
          return (
            <CellOfTable
              handleClick={() => handleClick(value)}
              value={value}
              nextNumber={nextNumber}
              key={value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SchulteTable;
