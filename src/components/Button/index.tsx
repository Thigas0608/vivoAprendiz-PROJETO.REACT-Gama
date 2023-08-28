import { ButtonAzul, ButtonCinza,ButtonAzulT,ButtonVerdeT } from "./style";


interface ButtonProps {
  text: string;
  style: string;
}

export default function Button({ style,text }: ButtonProps) {
  
  if(style == "verdeTranparente"){
    return <ButtonVerdeT>{text}</ButtonVerdeT>;
  }
  else if(style == "azulTranparente"){
    return <ButtonAzulT>{text}</ButtonAzulT>;
  }
  else if(style == "cinza"){
    return <ButtonCinza>{text}</ButtonCinza>;
  }
  else{
    return <ButtonAzul>{text}</ButtonAzul>;
    
  }
}
