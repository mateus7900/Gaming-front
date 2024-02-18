import "./styles.scss";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

export default function Button({ text, ...rest }: ButtonProps) {
  return (
    <button {...rest} className="button">
      {text}
    </button>
  );
}
