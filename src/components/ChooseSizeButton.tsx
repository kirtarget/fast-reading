interface ChooseSizeButtonProps {
  size: number;
  onClick: () => void;
}

const ChooseSizeButton = ({ size, onClick }: ChooseSizeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-400 rounded-md py-1 px-3 text-lg mx-2"
    >
      {size}x{size}
    </button>
  );
};

export default ChooseSizeButton;
