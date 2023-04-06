import styled from 'styled-components'

const RodapeContainer = styled.footer`
    padding: 0.9rem;
    text-align: center;
    margin-top: 2rem;
    h3{
        font-size: 0.9rem;
        color: #000;
    }
`

export default function Footer(){
    return(
        <RodapeContainer>
            <h3>Desenvolvido por Sergio Rodrigues.</h3>
        </RodapeContainer>
    )
}