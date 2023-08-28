import { Link } from "react-router-dom";
import logoConexos from "../../assets/logo-conexos-white.png";
import { HeaderStyled, Container, Menu } from "./style";

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Container>
          <img src={logoConexos} alt="Logo Conexos" />

          <Menu>
            <ul>
              <li>
               <Link to="/">Início</Link>
              </li>
              <li>
              <Link to="/servico">Serviços</Link>
              </li>
              <li>
              <Link to="/relatorios">Relatórios</Link>
              </li>
            </ul>
          </Menu>
        </Container>
      </HeaderStyled>
    </>
  );
}
