import { createContext, useEffect, useState } from "react";
import edificios from '../json/db.json'

export const EdificioContext = createContext();
EdificioContext.displayName = "Edificios"

export const EdificioProvider = ({ children }) => {
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [idEdificio, setIdEdificio] = useState("")
    const [edificio, setEdificio] = useState(edificios)
    const [dadosFormulario, setDadosFormulario] = useState([])
    const [edificioClicado, setEdificioSelecionado] = useState({})

    // const [loading, setLoading] = useState(false)
    
    const edificioRecuperadoLocalStorage = localStorage.getItem("edificio")
    
    useEffect(() => {
        if(edificioRecuperadoLocalStorage){
            const edificioRecuperadoLocalStorageConvertido = JSON.parse(edificioRecuperadoLocalStorage)
            setEdificio(edificioRecuperadoLocalStorageConvertido)
            // setLoading(true)
        }
    }, [])

    return (
        <EdificioContext.Provider value={{
            edificio,
            setEdificio,
            nome,
            setNome,
            imagem,
            setImagem,
            idEdificio,
            setIdEdificio,
            dadosFormulario,
            setDadosFormulario,
            edificioClicado,
            setEdificioSelecionado
        }}>
            {children}
        </EdificioContext.Provider>
    )
}