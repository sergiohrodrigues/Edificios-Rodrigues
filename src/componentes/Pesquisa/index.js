import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { EdificioContext } from "../../content/Edificio"


const PesquisaContainer = styled.section`
    margin: 2rem 0 2rem 0;
    h4{
        font-size: 1.1rem;
    }
    input{
        padding: 0.5rem;
        margin-top: 0.5rem;
    }
    @media screen and (min-width: 1024px){
        margin: 2rem 0 2rem 0;
    }
`

const EdificiosPesquisados = styled.section`
    @media screen and (min-width: 1024px){
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
`

const EdificioPesquisadoContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 2rem 0 0 0;
    img{
        width: 100px;
        height: 100px;
    }
    button{
        padding: 0.5rem;
        margin-top: 1rem;
    }
    @media screen and (min-width: 1024px){
        width: 300px;
        padding: 0.5rem;
        &:hover{
            border: 1px solid #fff;
        }
        button:hover{
            cursor: pointer;
        }
    }
`

export default function Pesquisa() {
    const { edificio } = useContext(EdificioContext)
    const [edificioPesquisado, setEdificioPesquisado] = useState("")

    // function pesquisaEdificio(){
    //     if(textoDigitado !== ""){
    //         const resultadoPesquisa = edificio.filter((ed) => ed.edificio.toUpperCase().includes(textoDigitado.toUpperCase()))
    //         setEdificioPesquisado(resultadoPesquisa)
    //     }
    //     document.querySelector("input").value = ""
    // }

    // return(
    //     <PesquisaContainer>
    //         <h4>Pesquise aqui o nome do Edificio</h4>
    //         <input type="text" placeholder="Digite o nome do edificio" onChange={(event) => setTextoDigitado(event.target.value)}/>
    //         <button onClick={pesquisaEdificio}>Pesquisa</button>
    //         {edificioPesquisado && edificioPesquisado.map((item, index) => (
    //             <div key={index}>
    //                 <h4>{item.edificio}</h4>
    //             </div>
    //         ))}
    //     </PesquisaContainer>
    // )

    return (
        <PesquisaContainer>
            <h4>Pesquise aqui o nome do Edificio</h4>
            <input type="text" placeholder="Digite o nome do edificio" onBlur={(event) => {
                const textoDigitado = event.target.value
                if (textoDigitado !== "") {
                    const resultadoPesquisa = edificio.filter((ed) => ed.edificio.toUpperCase().includes(textoDigitado.toUpperCase()))
                    setEdificioPesquisado(resultadoPesquisa)
                }

                document.querySelector("input").value = ""
            }} />
            {/* <button onClick={pesquisaEdificio}>Pesquisa</button> */}
            <EdificiosPesquisados>
                {edificioPesquisado && edificioPesquisado.map((item, index) => (
                    <EdificioPesquisadoContainer key={index}>
                        <img src={item.imagem} alt={item.edificio} />
                        <div>
                            <h4>Edificio: {item.edificio}</h4>
                            <Link to={`edificio/${item.id}`}>
                                <button>Mais detalhes</button>
                            </Link>
                        </div>
                    </EdificioPesquisadoContainer>
                ))}
            </EdificiosPesquisados>
        </PesquisaContainer>
    )
}