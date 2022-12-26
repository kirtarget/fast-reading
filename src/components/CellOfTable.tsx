import { useState } from "react";

interface CellOfTableProps {
  value: number;
  handleClick: () => void;
  nextNumber: number;
}

const CellOfTable = ({ value, handleClick, nextNumber }: CellOfTableProps) => {
  const [error, setError] = useState<boolean | null>(null);

  const clickHandler = () => {
    if (value !== nextNumber) {
      setError(true);
      setTimeout(() => {
        setError(null);
      }, 300);
      return;
    } else {
      setError(false);
      setTimeout(() => {
        setError(null);
      }, 300);
    }

    handleClick();
  };
  return (
    <div
      onClick={clickHandler}
      className={`flex border 
      w-full h-full
      items-center border-purple-400 justify-center 
      text-3xl font-semibold cursor-pointer 
      hover:bg-purple-300 focus:bg-purple-300
      ${error === null ? "bg-purple-100" : ""}
      ${error ? "bg-red-300" : "bg-green-300"}
      `}
      key={value}
    >
      {value}
    </div>
  );
};

export default CellOfTable;
