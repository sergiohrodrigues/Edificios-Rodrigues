import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Conteudo } from "../../componentes/Conteudo"
import { Titulo } from "../../componentes/Titulo"

const Form = styled.form`
    background-color: #fff;
    padding: 1rem 0;
    border-radius: 0.5rem;
    input{
        display: block;
        margin: 0.5rem auto;
        border: none;
        border: 1px solid black;
        border-radius: 16px;
        padding: 0.5rem;
        width: 70%;
    }
    input:focus{
        outline: 0;
    }
    button{
        width: 35%;
        padding: 0.5rem;
        border-radius: 8px;
        border: none;
        border: 1px solid black;
        margin: 0.5rem 0 0.5rem 0;
    }
    .voltar{
        width: 20%;
    }
    @media screen and (min-width: 768px){
        width: 60%;
        margin: 0 auto;
    }
    @media screen and (min-width: 1024px){
        width: 500px;
        margin: 0 auto;
        padding: 2rem 0;
        input{
            font-size: 1.5rem;
        }
        button{
            font-size: 1.3rem;
        }
        button:hover{
            cursor: pointer;
        }
        .voltar{
            width: 15%;
        }
    }
`

export default function Login() {

    const navigate = useNavigate()

    function entrar(event) {
        event.preventDefault()
        navigate("/cadastrar")
    }

    return (
        <>
            <Conteudo margin="6rem auto 0 auto" height="75vh">
                <Form onSubmit={(event) => entrar(event)}>
                <Titulo size="1.1rem">Por favor entre com seu login</Titulo>
                    <input type="email" placeholder="Digite seu usuario ou e-mail" required />
                    <input type="password" placeholder="Digite sua senha" required />
                    <button type="submit">Entrar</button><br />
                    <button type="button" onClick={() => navigate("/")} className="voltar">Voltar</button>
                </Form>
            </Conteudo>
        </>
    )
}