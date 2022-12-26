import CellOfTable from "./CellOfTable";

interface SchulteTableProps {
  boardSize: number;
}

const SchulteTable = ({ boardSize }: SchulteTableProps) => {
  const board: number[] = Array.from(
    { length: boardSize ** 2 },
    (_, i) => i + 1
  ).sort(() => Math.random() - 0.5);

  return (
    <div
      className={`grid grid-cols-${boardSize} grid-rows-${boardSize} w-96 h-96 m-auto`}
    >
      {board.map((value) => {
        return <CellOfTable value={value} />;
      })}
    </div>
  );
};

export default SchulteTable;
