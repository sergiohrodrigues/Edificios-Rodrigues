import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { EdificioContext } from '../../content/Edificio'
import styled from 'styled-components'
import { Titulo } from '../../componentes/Titulo'
import { Conteudo } from '../../componentes/Conteudo'

const Form = styled.form`
    background-color: #d2cbcb;
    width: 90%;
    margin: 5rem auto 0 auto;
    text-align: center;
    border-radius: 1rem;
    padding: 2rem 0;
    label{
        font-size: 1.2rem;
    }
    input{
        width: 80%;
        display: block;
        padding: 0.5rem;
        font-size: 0.8rem;
        margin: 0.5rem auto 0.5rem auto;
    }
    button{
        padding: 0.5rem 1rem;
        border-radius: 8px;
        border: none;
        border: 1px solid black;
        margin-top: 1.2rem;
    }
    p{
        margin: -0.3rem 0 -0.9rem 0;
        font-size: 0.8rem;
        color: rgb(21, 241, 21);
    }
    #erro{
        margin: 1rem 0 -0.9rem 0;
        color: red;
    }
    @media screen and (min-width: 1024px){
        width: 40%;
        input{
            width: 55%;
        }
        button:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }
`

export default function CadastrarEdificio() {
    const { edificio, setEdificio, nome, setNome, imagem, setImagem } = useContext(EdificioContext)
    const navigate = useNavigate()

    function Cadastrar(e) {
        e.preventDefault()

        let extensoesImagem = ["jpg", "png", "jpeg"]

        const novoEdificio = {
            "id": edificio.length + 1,
            "edificio": nome,
            "locador": "Biopark",
            "imagem": extensoesImagem.includes(imagem.split('.').pop()) && imagem !== "" ? imagem : "/imagens/edificio1.jpg",
            // "apartamentos": [
            //     {
            //         "numero": 1,
            //         "locatario": "Disponivel",
            //         "valor": "450,00"
            //     }
            // ]
        }

        const nomeDiferente = edificio.some((predio) => predio.edificio === nome)

        if (nomeDiferente !== true && nome.length !== 0) {
            setEdificio([...edificio, novoEdificio])
            document.querySelector("#erro").innerHTML = ""
            document.querySelector("#sucess").innerHTML = "Edificio criado com sucesso, volte para adicionar apartamentos."
        } if (nomeDiferente === true) {
            alert("Esse Edificio ja existe por favor digite outro nome")
        } if (nome.length === 0) {
            document.querySelector("#erro").innerHTML = "Por favor digite o nome do Edificio"
        }
        document.querySelector("#nome").value = ""
        document.querySelector("#imagem").value = ""
        
    }
    localStorage.setItem("edificio", JSON.stringify(edificio))
    

    return (
        <>
        <Conteudo height="70vh">
            <Form onSubmit={(e) => Cadastrar(e)}>
                <Titulo size="1.5rem" color="#fff">Nome do Edificio</Titulo>
                    <input onChange={(event) => setNome(event.target.value)} id="nome" placeholder='Digite o nome do Edificio' />
                    <input onChange={(event) => setImagem(event.target.value)} id="imagem" placeholder='Link da Imagem com final .jpg, .png, .jpeg' />
                    <p id='sucess'></p>
                    <p id='erro'></p>
                <button id='cadastrado'>Cadastrar</button><br />
                <button onClick={() => navigate("/cadastrar")}>Voltar</button>
            </Form>
        </Conteudo>
        </>
    )
}