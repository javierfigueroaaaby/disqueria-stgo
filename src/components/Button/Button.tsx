import './Button.css';

type ButtonProps = {
  color?: 'primary' | 'secondary';
  text: string;
  url: string;
  target?: '_blank' | '_self';
};

function Button({ color, text, url, target } : ButtonProps) {
  return (
    <a
      className={`button-link ${color}`}
      href={url}
      target={target}
    >
      {text}
    </a>
  );
}

export default Button;