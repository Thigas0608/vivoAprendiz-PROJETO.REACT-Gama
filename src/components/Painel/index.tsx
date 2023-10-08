import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { PainelStyled } from "./style"; // Importação do componente de estilo PainelStyled
import axios from "axios";

// Definindo a interface para o objeto Order que será retornado pela API
interface Order {
    id: number;
    nome: string;
    plano: string;
    data: string;
    status: string;
}

// Componente Tabela
export default function Tabela() {
    // Definindo o estado "linha" para armazenar os dados da API
    const [linha, setLinha] = useState<Order[]>([]);

    // Efeito que é executado quando o componente é montado
    useEffect(() => {
        axios
            .get<Order[]>("http://localhost:3000/ordens")
            .then((response) => {
                setLinha(response.data); // Armazena os dados da API no estado "linha"
            })
            .catch((error) => {
                console.error("Erro ao buscar os dados da API:", error);
            });
    }, []); // O segundo argumento vazio indica que este efeito é executado uma vez, quando o componente é montado

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
                                    <Link to={`/servicoDetalhe/${item.id}`}>
                                        <Button style="azulTranparente" text="ver detalhes" />
                                    </Link>
                                </td>
                                <td>
                                    <Button style="verdeTranparente" text="atender solicitação"/>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </PainelStyled>
        </>
    );
}