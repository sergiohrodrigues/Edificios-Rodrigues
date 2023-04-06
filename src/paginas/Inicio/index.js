import Edificios from '../../componentes/Edificios'
import { Titulo } from '../../componentes/Titulo'
import { Conteudo } from '../../componentes/Conteudo'
import Pesquisa from '../../componentes/Pesquisa'


export default function Inicio() {

    return (
        <Conteudo>
            <Pesquisa />
            <Titulo size="1.5rem">Edificios Disponiveis</Titulo>
            <Edificios />
        </Conteudo>
    )
}