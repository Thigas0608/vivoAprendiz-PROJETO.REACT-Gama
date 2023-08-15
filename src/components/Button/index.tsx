import { ButtonStyled } from "./style";
import { ButtonFormulario } from "./style";


interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <ButtonStyled>{text}</ButtonStyled>;
}
