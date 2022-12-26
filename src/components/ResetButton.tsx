import Button from "./Button";

interface ResetButtonProps {
  onClick: () => void;
}
const ResetButton = ({ onClick }: ResetButtonProps) => {
  return <Button onClick={onClick}>Сбросить</Button>;
};

export default ResetButton;
