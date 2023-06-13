import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import styled from 'styled-components'
import { useState } from 'react'

const CabecalhoContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem;
    position: relative;
    a{
        text-decoration: none;
    }
    h2{
        font-family: 'Yellowtail', cursive;
        font-size: 2rem;
        font-size: 400;
        color: #000;
        text-decoration: none;
    }
    span{
        color: blue;
    }
    @media screen and (min-width: 768px){
        justify-content: space-around;
        .menu{
            display: none;
        }
    }
    @media screen and (min-width: 1024px){
    }
`

const NavegacaoLista = styled.ul`
    width: 70vw;
    height: 40vh;
    background-color: #000;
    display: ${props => props.display || 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
    border-radius: 1rem 0 0 1rem;

    position: absolute;
    top: 100%;
    right: 0;
    a{
        color: #fff;
        font-size: 1.3rem;
        text-align: center;
    }
    @media screen and (min-width: 768px){
        width: auto;
        height: auto;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        position: static;
        padding: 0;
        a{
            color: #000;
        }
    }
        a:hover{
        text-decoration: underline;
    }

`

export default function Header() {
    const pages = [
        {
            label: 'Inicio',
            rota: '/'
        },
        {
            label: 'Todos Edificios',
            rota: 'edificios'
        },
        {
            label: 'Cadastrar edificio/apartamentos',
            rota: 'login'
        }
    ]

    const [display, setDisplay] = useState(false)

    return (
        <>
            <CabecalhoContainer>
                <h2><span>Edificios</span>Rodrigues</h2>
                <NavegacaoLista display={display ? 'flex' : 'none'}>
                    {pages.map((page, index) => (
                        <Link key={index} to={page.rota} onClick={() => setDisplay(false)}>
                            {page.label}
                        </Link>
                    ))}
                </NavegacaoLista>
                <GiHamburgerMenu
                    className='menu'
                    size="1.5rem"
                    color='black'
                    display={display ? "none" : "block"}
                    onClick={() => setDisplay(!display)}
                    onBlur={() => setDisplay(false)}
                />
                <CgClose
                    className='menu'
                    size="1.5rem"
                    color='black'
                    display={display ? "block" : "none"}
                    onClick={() => setDisplay(!display)}
                    onBlur={() => setDisplay(false)}
                />
            </CabecalhoContainer>
        </>
    )
}