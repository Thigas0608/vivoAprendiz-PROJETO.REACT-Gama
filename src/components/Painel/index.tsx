import { Link } from "react-router-dom";
import Button from "../Button";
import { PainelStyled } from "./style";

function LinhaInfo(
    cod: number,
    nome: string,
    servico: string,
    data: string,
    status: string,
) {
    return { cod, nome, servico, data, status }
}

const linha = [
    LinhaInfo(1232434566, 'Joana da Silva', 'Plano 1 - Instalação', '26/06/2023', 'Aguardando agendamento'),
    LinhaInfo(1232434566, 'Joana da Silva', 'Plano 1 - Instalação', '26/06/2023', 'Aguardando agendamento'),
    LinhaInfo(1232434566, 'Joana da Silva', 'Plano 1 - Instalação', '26/06/2023', 'Aguardando agendamento'),
    LinhaInfo(1232434566, 'Joana da Silva', 'Plano 1 - Instalação', '26/06/2023', 'Aguardando agendamento'),
]

export default function Tabela() {
    return (
        <>
            <PainelStyled>
            <table>
                    <thead>
                        <tr>
                            <td>Codigo</td>
                            <td>Nome</td>
                            <td>Serviço</td>
                            <td>Data</td>
                            <td>Status</td>
                        </tr>
                    </thead>

                    {linha.map((linha) => (
                        <tbody key={linha.cod} >
                            <tr>
                                <td>{linha.cod}</td>
                                <td>{linha.nome}</td>
                                <td>{linha.servico}</td>
                                <td>{linha.data}</td>
                                <td>{linha.status}</td>
                                <td> <Link to="/servicoDetalhe"><Button style="azulTranparente" text="ver detalhes" /></Link> </td>
                                <td> <Link to="/relatorios"><Button style="verdeTranparente" text="atender solicitação" /></Link> </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </PainelStyled>
        </>
    );
}
