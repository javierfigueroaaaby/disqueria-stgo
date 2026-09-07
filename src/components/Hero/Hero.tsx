import Button from '../Button/Button';
import './Hero.css';

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  buttonColor?: 'primary' | 'secondary';
  buttonText: string;
  buttonUrl: string;
  buttonTarget?: '_blank' | '_self';
};

function Hero({ title, subtitle, image, buttonColor, buttonText, buttonUrl, buttonTarget } : HeroProps) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Button color={buttonColor} text={buttonText} url={buttonUrl} target={buttonTarget} />
      </div>
    </div>
  );
}

export default Hero;