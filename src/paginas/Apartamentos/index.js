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
    const { edificio, setEdificioSelecionado } = useContext(EdificioContext)

    const params = useParams()
    const navigate = useNavigate()

    const edificioClicado = edificio.filter((item) => {
        return item.id === Number(params.id)
    })

    const apartamentos = edificioClicado.map((item) => item.apartamentos)

    function navegarParaApartamento(edif){
        navigate(`/edificio/${params.id}/apartamento/${edif.numero}`)
        setEdificioSelecionado(edif)
    }
    
    return (
        <Conteudo margin="2rem auto">
            <Edificio>
                {edificioClicado.map((ed, index) => (
                    <div key={index}>
                        <Titulo size="1.5rem" padding="0">Edificio: {ed.edificio}</Titulo>
                        <h3>Locador: {ed.locador}</h3>
                    </div>
                ))}
            </Edificio>

            <ApartamentosContainer>
                {apartamentos === undefined && <Titulo size="1.2rem">Edificio sem apartamentos no momento</Titulo>}
                {apartamentos.length && apartamentos[0].map((edif, index) => (
                        <Apartamento key={index}>
                            <h4>Apartamento: {edif.numero}</h4>
                            <h4>Locatario: {edif.locatario}</h4>
                            {edif.locatario === "Disponivel" && <h4>Valor: {edif.valor}</h4>}
                            {edif.locatario === "Disponivel" && <button onClick={() => navegarParaApartamento(edif)}>Alugar agora</button>}
                        </Apartamento>
                ))}
            </ApartamentosContainer>
            <BotaoVoltar onClick={() => navigate('/')}>Voltar</BotaoVoltar>
        </Conteudo>
    )
}