import styled from "styled-components";

export const Titulo = styled.h2`
    font-size: ${props => props.size || '1rem'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color || '#000'};
    padding: ${props => props.padding || '1rem'};
    margin: ${props => props.margin || '0'};
`