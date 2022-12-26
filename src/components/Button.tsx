interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-400 rounded-md py-1 px-3 text-lg mx-2"
    >
      {children}
    </button>
  );
};

export default Button;
