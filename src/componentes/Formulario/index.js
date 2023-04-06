import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { EdificioContext } from "../../content/Edificio"
import { Conteudo } from "../Conteudo"
import { Titulo } from "../Titulo"

const FormularioContainer = styled.form`
    width: 90%;
    margin: 0 auto;
    legend{
        font-size: 1.2rem;
    }
    input{
        width: 90%;
        padding: 0.4rem;
    }
    input:focus{
        outline: 0;
    }
    select{
        width: 70%;
        padding: 0.4rem;
    }
    button{
        display: block;
        padding: 0.4rem;
        margin-top: 1rem;
    }
    p{
        color: green;
    }
    @media screen and (min-width: 1024px){
        width: 50%;
        margin-top: 4rem;
        input{
            width: 50%;
        }
        select{
            width: 50%;
        }
        button:hover{
            cursor: pointer;
        }
    }
`

export default function Formulario() {
    const { edificio, setEdificio, dadosFormulario, setDadosFormulario, edificioSelecionado } = useContext(EdificioContext)
    const navigate = useNavigate()
    const params = useParams()

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [dataNasc, setDataNasc] = useState("")
    const [cpf, setCPF] = useState("")
    const [email, setEmail] = useState("")
    const [pagamento, setPatamento] = useState("")

    const edificioEApartamentoSelecionado = edificioSelecionado.apartamentos[params.id - 1]

    
    // const EdificioJaExistente = edificio.find((ed) => ed.edificio === edificioSelecionado.edificio)
    // EdificioJaExistente.edificio = "Sergio Edificios"
    // console.log(edificioEApartamentoSelecionado.valor)
    
    function enviarDados(event) {
        event.preventDefault()
        const select = document.querySelector("#select")
        const indice = select.selectedIndex
        const selectSelecionado = select[indice].text

        const dados = {
            edificio: edificioSelecionado.edificio,
            apartamento: Number(params.id),
            nome: nome,
            sobrenome: sobrenome,
            dataNasc: dataNasc,
            cpf: cpf,
            email: email,
            pagamento: selectSelecionado
        }

        // setDadosFormulario(dados)
        // edificioEApartamentoSelecionado.locatario = nome

        // setEdificio([...edificio, edificioSelecionado])
        
        document.querySelector("#sucess").innerHTML = "Dados enviados com sucesso!"

        document.querySelectorAll("input").forEach((inpt) => {
            inpt.value = ""
        })
        
        console.log(dados)
    }

    return (
        <Conteudo align="left" height="80vh">
            <FormularioContainer action="" onSubmit={enviarDados}>
                <Titulo size="1.3rem" padding="0" margin="1rem 0 1rem 0">Preencha esse formulário para alugar seu apartamento.</Titulo>
                <fieldset>
                    <legend>Nome</legend>
                    <input id="input" type="text" placeholder="digite seu nome"  onChange={(event) => setNome(event.target.value)} />
                </fieldset>
                <fieldset>
                    <legend>Sobrenome</legend>
                    <input id="input" type="text" placeholder="digite seu sobrenome"  onChange={(event) => setSobrenome(event.target.value)} />
                </fieldset>
                <fieldset>
                    <legend>Data de nascimento</legend>
                    <input id="input" type="date"  onChange={(event) => setDataNasc(event.target.value)} />
                </fieldset>
                <fieldset>
                    <legend>CPF</legend>
                    <input id="input" type="number" placeholder="digite seu cpf"  onChange={(event) => setCPF(event.target.value)} minLength={8}/>
                </fieldset>
                <fieldset>
                    <legend>Email</legend>
                    <input id="input" type="email" placeholder="digite seu email"  onChange={(event) => setEmail(event.target.value)} />
                </fieldset>
                <fieldset>
                    <legend>Valor</legend>
                    <span>{edificioEApartamentoSelecionado.valor}</span>
                </fieldset>
                <fieldset>
                    <legend>Pagamento</legend>
                    <select name="" id="select" >
                        <option value=""></option>
                        <option value="Débito">Cartão de Débito</option>
                        <option value="Credito">Cartão de Credito</option>
                        <option value="Pix">Pix</option>
                        <option value="Outro">Outro</option>
                    </select>
                </fieldset>
                <p id="sucess"></p>
                <button type="submit">Confirmar</button>
                <button type="submit" onClick={() => navigate(-1)}>Voltar</button>
            </FormularioContainer>
        </Conteudo>
    )
}