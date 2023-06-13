import { useContext, useEffect, useState } from 'react'
import { EdificioContext } from '../../content/Edificio'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Form = styled.form`
    width: 80%;
    margin: 5.5rem auto;
    text-align: left;
    background-color: #d2cbcb;
    padding: 1rem;
    label{
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
    select{
        width: 50%;
        height: 30px;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
    input{
        display: block;
        width: 30%;
        margin: 0.5rem 0 0.5rem 0;
        font-size: 1rem;
        padding: 0.5rem;
    }
    button{
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        border: none;
    }
    p{
        font-size: 0.8rem;
        color: green;
    }
    @media screen and (min-width: 768px){
        width: 80%;
    }
    @media screen and (min-width: 1024px){
        width: 50%;
    }
`


export default function CadastrarApartamento() {

    const [loading, setLoading] = useState(false)


    const navigate = useNavigate()
    const [quantidadeDeApartamentos, setQuantidadeDeApartamentos] = useState("")
    const [valoresApartamentos, setValoresApartamentos] = useState("")
    const { edificio, setEdificio } = useContext(EdificioContext)

    const edificioRecuperadoLocalStorage = localStorage.getItem("edificio")

    useEffect(() => {
        if (edificioRecuperadoLocalStorage && loading === false) {
            setEdificio(JSON.parse(edificioRecuperadoLocalStorage))
            setLoading(true)
        }
    }, [edificioRecuperadoLocalStorage, setEdificio, loading, setLoading])



    function adicionarApartamentos(e) {
        e.preventDefault()

        const indiceEdificio = document.querySelector("select").value
        const edificioSelecionado = edificio[indiceEdificio - 1]


        if (edificioSelecionado !== undefined) {
            let edificiosAuxiliares = edificio
            let apartamentos = []

            if (edificioSelecionado.apartamentos) {
                for (let i = 0; i < quantidadeDeApartamentos; i++) {
                    apartamentos.push({
                        numero: edificioSelecionado.apartamentos.length + apartamentos.length + 1,
                        locatario: "Disponivel",
                        valor: `R$ ${valoresApartamentos},00`
                    })
                }
                
                edificiosAuxiliares[indiceEdificio - 1].apartamentos.push(...apartamentos)
                setEdificio(edificiosAuxiliares)

                document.querySelector("input").value = ""
                document.querySelector("#valor").value = ""
                document.querySelector("select").value = ""
                document.querySelector("#sucess").innerHTML = "Apartamentos cadastrados com sucesso."
                
            } else {
                edificioSelecionado.apartamentos = [{
                    numero: apartamentos.length + 1,
                    locatario: "Disponivel",
                    valor: `R$ ${valoresApartamentos},00`
                }]
                
                for (let i = 0; i < quantidadeDeApartamentos - 1; i++) {
                    apartamentos.push({
                        numero: edificioSelecionado.apartamentos.length + apartamentos.length + 1,
                        locatario: "Disponivel",
                        valor: `R$ ${valoresApartamentos},00`
                    })
                }
                
                edificiosAuxiliares[indiceEdificio - 1].apartamentos.push(...apartamentos)
                setEdificio(edificiosAuxiliares)
                
                document.querySelector("input").value = ""
                document.querySelector("#valor").value = ""
                document.querySelector("select").value = ""
                document.querySelector("#sucess").innerHTML = "Apartamentos cadastrados com sucesso."
            }

        } else {
            alert("Por favor selecione um Edificio")
            document.querySelector("input").value = ""
        }

        localStorage.setItem("edificio", JSON.stringify(edificio))
    }


    return (
        <>
            <Form onSubmit={(e) => adicionarApartamentos(e)}>
                <label>Selecione o Edificio</label><br />
                <select>
                    <option value=""></option>
                    {edificio.map((edif) => (
                        <option value={edif.id} key={edif.id}>{edif.edificio}</option>
                    ))}
                </select><br />
                <label>Quantos apartamentos deseja adicionar
                    <input type="number" onChange={(e) => setQuantidadeDeApartamentos(e.target.value)} />
                </label>
                <label>Qual o valor em reais dos apartamentos
                    <input type="number" id='valor' onChange={(e) => setValoresApartamentos(e.target.value)} />
                </label>
                <p id='sucess'></p>
                <button>Cadastrar</button><br />
                <button onClick={(e) => navigate("/cadastrar")}>Voltar</button>
            </Form>
        </>
    )
}