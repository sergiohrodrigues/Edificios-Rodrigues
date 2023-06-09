import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { EdificioContext } from '../../content/Edificio'
import { Titulo } from '../Titulo'

const EdificiosContainer = styled.section`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    
    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    `

const Edificio = styled.div`
    background-color: #fff;
    text-align: center;
    button{
        margin-top: 1rem;
        padding: 1rem;
        border: none;
        background-color: green;
        border-radius: 16px;
        color: #fff;
    }
    img{
        width: 200px;
        height: 300px;
    }
    @media screen and (min-width: 768px){
    }

    @media screen and (min-width: 1024px){
        button:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export default function Edificios() {
    const { edificio, setEdificio, setEdificioSelecionado } = useContext(EdificioContext)
    const [loading, setLoading] = useState(false)

    const edificioRecuperadoLocalStorage = localStorage.getItem("edificio")

    useEffect(() => {
        if (edificioRecuperadoLocalStorage && loading === false) {
            setEdificio(JSON.parse(edificioRecuperadoLocalStorage))
            setLoading(true)
        }
    }, [edificioRecuperadoLocalStorage, loading, setEdificio])

    return (
        <>
            <EdificiosContainer>
                {edificio.map((ed) => (
                    <Edificio key={ed.id} >
                        <img src={ed.imagem} alt={`Edificio ${ed.edificio}`} />
                        <Titulo size="1.5rem" padding="0">Edificio: {ed.edificio}</Titulo>
                        <h4>Apartamentos disponiveis: {ed.apartamentos ? ed.apartamentos.filter((ed) => ed.locatario === "Disponivel").length : '0'}</h4>
                        <Link to={`/edificio/${ed.id}`} onClick={() => setEdificioSelecionado(ed)}><button>Alugar apartamento</button></Link>
                    </Edificio>
                ))
                }
            </EdificiosContainer>
        </>
    )
}