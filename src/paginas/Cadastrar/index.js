import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Conteudo } from "../../componentes/Conteudo"
import { Titulo } from '../../componentes/Titulo'

const CadastrarContainer = styled.section`
    width: 90%;
    margin: 4rem auto 0 auto;
    text-align: center;
    background-color: gray;
    border-radius: 16px;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        width: 80%;
        font-size: 1.1rem;
        padding: 1rem 0;
        border-radius: 8px;
        border: none;
    }
    .voltar{
        width: 80px;
        padding: 0.5rem;
        border-radius: 8px;
        border: none;
    }

    @media screen and (min-width: 1024px){
        width: 40%;
        button:hover{
            cursor: pointer;
        }
    }
`

export default function Cadastrar() {
    const navigate = useNavigate()
    return (
        <>
        <Conteudo margin="6rem auto 0 auto" height="75vh">
            <CadastrarContainer>
                <Titulo size="1.5rem" color="#fff">Você deseja:</Titulo>
                <button onClick={() => navigate("/cadastrar/edificio")}>Cadastrar Edificio</button><br />
                <button onClick={() => navigate("/cadastrar/apartamento")}>Cadastrar Apartamentos</button><br/>
                <button className="voltar" onClick={() => navigate("/login")}>Voltar</button>
            </CadastrarContainer>
        </Conteudo>
        </>
    )
}