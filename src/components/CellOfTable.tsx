interface CellOfTableProps {
  value: number;
}

const CellOfTable = ({ value }: CellOfTableProps) => {
  return (
    <div
      className={`flex flex-col bg-purple-100 border items-center border-purple-400 justify-center text-3xl font-semibold`}
      key={value}
    >
      {value}
    </div>
  );
};

export default CellOfTable;
