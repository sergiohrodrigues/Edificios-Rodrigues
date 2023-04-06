import { createContext, useState } from "react";
import edificios from '../json/db.json'

export const EdificioContext = createContext();
EdificioContext.displayName = "Edificios"

export const EdificioProvider = ({ children }) => {
    const [nome, setNome] = useState("")
    const [imagem, setImagem] = useState("")
    const [idEdificio, setIdEdificio] = useState("")
    const [edificio, setEdificio] = useState(edificios)
    const [dadosFormulario, setDadosFormulario] = useState([])
    const [edificioSelecionado, setEdificioSelecionado] = useState({})

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
            edificioSelecionado,
            setEdificioSelecionado
        }}>
            {children}
        </EdificioContext.Provider>
    )
}