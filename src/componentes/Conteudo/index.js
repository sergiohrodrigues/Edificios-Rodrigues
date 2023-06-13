import styled from "styled-components";

export const Conteudo = styled.main`
    width: 90%;
    min-height: ${props => props.height || "80vh"};
    margin: ${props => props.margin || "1rem auto"};
    padding: ${props => props.padding || "0"};
    text-align: ${props => props.align || "center"};
    gap: 1.5rem;
`