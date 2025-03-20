interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return <button {...props}>{label}</button>;
};

export default Button;
