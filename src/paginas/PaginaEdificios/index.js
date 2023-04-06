import styled from "styled-components";
import { Conteudo } from "../../componentes/Conteudo";
import Edificios from "../../componentes/Edificios";
import { Titulo } from "../../componentes/Titulo";

const EdificiosContainer = styled.section`
    text-align: left;
`

export default function PaginaEdificios() {
    return (
        <Conteudo>
            <EdificiosContainer>
                <Titulo size="2rem">Todos Edificios</Titulo>
                <Edificios />
            </EdificiosContainer>
        </Conteudo>
    )
}