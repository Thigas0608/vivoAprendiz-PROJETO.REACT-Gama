import { ButtonAzul, ButtonCinza, ButtonAzulT, ButtonVerdeT } from "./style";

interface ButtonProps {
  text: string;
  style: string;
  onClick?: () => void; // Adicione a propriedade onClick como opcional
}

export default function Button({ style, text, onClick }: ButtonProps) {
  if (style === "verdeTranparente") {
    return <ButtonVerdeT onClick={onClick}>{text}</ButtonVerdeT>;
  } else if (style === "azulTranparente") {
    return <ButtonAzulT onClick={onClick}>{text}</ButtonAzulT>;
  } else if (style === "cinza") {
    return <ButtonCinza onClick={onClick}>{text}</ButtonCinza>;
  } else if (style === "azul") {
    return <ButtonAzul onClick={onClick}>{text}</ButtonAzul>;
  } else {
    return null;
  }
}



