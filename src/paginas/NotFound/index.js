import React from "react"
import styled from "styled-components"
import { Conteudo } from "../../componentes/Conteudo"
import { useNavigate } from "react-router-dom"

const NotFoundContainer = styled.section`
    text-align: center;
    padding-top: 5rem;
    button{
        background: transparent;
        border: none;
        text-decoration: underline;
    }
    button:hover{
        cursor: pointer;
    }
    h2{
        font-size: 3rem;
    }
`

export default function NotFound() {
    const navigate = useNavigate()
    return (
        <Conteudo>
            <NotFoundContainer>
                <button onClick={() => navigate(-1)}>{'< Voltar'}</button>
                <h2>Página nao encontrada</h2>
            </NotFoundContainer>
        </Conteudo>
    )
}