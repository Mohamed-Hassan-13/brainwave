import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const clases = `button relative inline-flex justify-center items-center h-11 
  transition-colors hover:text-color-1 
  ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClases = "relative z-10";

  const renderButton = () => (
    <button className={clases} onClick={onClick}>
      <span className={spanClases}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={clases} onClick={onClick}>
      <span className={spanClases}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
