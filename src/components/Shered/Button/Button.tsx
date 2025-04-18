type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  className,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};
