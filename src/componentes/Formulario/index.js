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
    const { edificio, setEdificio, setDadosFormulario } = useContext(EdificioContext)
    const navigate = useNavigate()
    const params = useParams()

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [dataNasc, setDataNasc] = useState("")
    const [cpf, setCPF] = useState("")
    const [email, setEmail] = useState("")
    const [pagamento, setPagamento] = useState("")
    
    function enviarDados(event) {
        event.preventDefault()

        const inputs = document.querySelectorAll('#input')
        const arrayInputs = Array.from(inputs)

        const todosInputs = arrayInputs.filter((item) => {
            if(item.value !== ''){
                return true
            } else {
                return false
            }
        })

        if(todosInputs.length === inputs.length){
            const dados = {
                apartamento: Number(params.id),
                nome: nome,
                sobrenome: sobrenome,
                dataNasc: dataNasc,
                cpf: cpf,
                email: email,
                pagamento: pagamento
            }
            
            document.querySelector("#sucess").innerHTML = "Apartamento alugado com sucesso!"
    
            document.querySelectorAll("input").forEach((inpt) => {
                inpt.value = ""
                setPagamento('')
            })

            setDadosFormulario(dados)
            console.log(dados)
        } else {
            alert('Preencha todos os campos por favor')
        }

    }

    const edificioSelecionado = edificio.filter((item) => item.id === Number(params.id))

    const apartamentoSelecionado = edificioSelecionado[0].apartamentos[params.idApartamento - 1]

    return (
        <Conteudo align="left" height="80vh">
            <FormularioContainer action="">
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
                    <span>{apartamentoSelecionado.length !== 0 && apartamentoSelecionado.valor}</span>
                </fieldset>
                <fieldset>
                    <legend>Pagamento</legend>
                    <select name="" id="input" value={pagamento} onChange={e => setPagamento(e.target.value)}>
                        <option value=""></option>
                        <option value="Debito">Cartão de Débito</option>
                        <option value="Credito">Cartão de Credito</option>
                        <option value="Pix">Pix</option>
                        <option value="Outro">Outro</option>
                    </select>
                </fieldset>
                <p id="sucess"></p>
                <button onClick={enviarDados}>Confirmar</button>
                <button onClick={() => navigate(`/edificio/${params.id}`)}>Voltar</button>
            </FormularioContainer>
        </Conteudo>
    )
}