import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { PainelStyled } from "./style";
import axios from "axios";

interface Order {
    id: number;
    nome: string;
    plano: string;
    data: string;
    status: string;
}

export default function Tabela() {
    const [linha, setLinha] = useState<Order[]>([]);
    useEffect(() => {
        axios
            .get<Order[]>("http://localhost:3000/ordens") // Adicione a tipagem aqui
            .then((response) => {
                setLinha(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar os dados da API:", error);
            });
    }, []);

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

                    {linha.map((item) => (
                        <tbody key={item.id}>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.plano}</td>
                                <td>{item.data}</td>
                                <td>{item.status}</td>
                                <td>
                                    <Link to="/servicoDetalhe">
                                        <Button style="azulTranparente" text="ver detalhes" />
                                    </Link>
                                </td>
                                <td>
                                    <Link to="/relatorios">
                                        <Button style="verdeTranparente" text="atender solicitação" />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </PainelStyled>
        </>
    );
}