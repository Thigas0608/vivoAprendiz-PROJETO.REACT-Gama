import logoConexos from "../../assets/logo-conexos-white.png";
import { HeaderStyled, Container} from "./style";

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Container>
          <img src={logoConexos} alt="Logo Conexos" />
        </Container>
      </HeaderStyled>
    </>
  );
}
