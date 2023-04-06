import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EdificioContext } from '../../content/Edificio'
import { Conteudo } from '../../componentes/Conteudo'
import styled from 'styled-components'
import { Titulo } from '../../componentes/Titulo'

const Edificio = styled.div`
    width: 100%;
    text-align: center;
    margin: 2rem 0;
    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 2rem;
    }
`

const ApartamentosContainer = styled.section`
    .voltar{
        padding: 1rem;
        border: none;
        background-color: red;
        border-radius: 16px;
        color: #fff; 
    }
    @media screen and (min-width: 768px){
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
`

const Apartamento = styled.div`
    text-align: center;
    margin: 2rem auto 1rem auto;
    background-color: gray;
    border-radius: 8px;
    padding: 1rem 0;
    width: 80%;
    button{
        margin-top: 0.3rem;
        padding: 1rem;
        border: none;
        background-color: green;
        border-radius: 16px;
        color: #fff;
    }
    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        width: 40%;
        margin: 0;
        button{
            width: 50%;
        }
    }
    @media screen and (min-width: 1024px){
        button{
            width: 150px;
        }
        button:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }
`

const BotaoVoltar = styled.button`
    width: 30%;
    padding: 1rem;
    border: none;
    background-color: red;
    border-radius: 16px;
    color: #fff; 
    margin-top: 1rem;
    
    @media screen and (min-width: 1024px){
        margin-top: 2rem;
        width: 150px;
        :hover{
            cursor: pointer;
            text-decoration: underline;
        }
    } 
`


export default function Apartamentos() {
    const { edificio, setEdificio } = useContext(EdificioContext)
    const [loading, setLoading] = useState(false)
    
    const edificioRecuperadoLocalStorage = localStorage.getItem("edificio")
    
    useEffect(() => {
        if(edificioRecuperadoLocalStorage && loading === false){
            setEdificio(JSON.parse(edificioRecuperadoLocalStorage))
            setLoading(true)
        }
    }, [])

    const params = useParams()
    const navigate = useNavigate()
    const idEdificio = params.id
    const edificioClicado = edificio.find((edif) => edif.id === Number(idEdificio))

    const apartamentosDoEdificio = edificioClicado.apartamentos

    return (
        <Conteudo margin="2rem auto">
            <Edificio>
                <Titulo size="1.5rem" padding="0">Edificio: {edificioClicado.edificio}</Titulo>
                <h3>Locador: {edificioClicado.locador}</h3>
            </Edificio>

            <ApartamentosContainer>
                {apartamentosDoEdificio === undefined && <Titulo size="1.2rem">Edificio sem apartamentos no momento</Titulo>}
                {apartamentosDoEdificio && apartamentosDoEdificio.map((edif) => {
                    return (
                        <Apartamento key={edif.numero}>
                            <h4>Apartamento: {edif.numero}</h4>
                            <h4>Locatario: {edif.locatario}</h4>
                            {edif.locatario === "Disponivel" && <h4>Valor: {edif.valor}</h4>}
                            {edif.locatario === "Disponivel" && <button onClick={() => navigate(`/apartamento/${edif.numero}`)}>Alugar agora</button>}
                        </Apartamento>
                    )
                })}
            </ApartamentosContainer>
            <BotaoVoltar onClick={() => navigate(-1)}>Voltar</BotaoVoltar>
        </Conteudo>
    )
}