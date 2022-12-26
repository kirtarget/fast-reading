import Button from "./Button";

interface ChooseSizeButtonProps {
  size: number;
  onClick: () => void;
}

const ChooseSizeButton = ({ size, onClick }: ChooseSizeButtonProps) => {
  return (
    <Button onClick={onClick}>
      {size}x{size}
    </Button>
  );
};

export default ChooseSizeButton;
