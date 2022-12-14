import Botao from '../Botao/Index'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return(
        <section>
            <form>
                <h2>Dados do novo jogador</h2>
                <CampoTexto label="Nome do Jogador:"/>
                <CampoTexto label="Nome do Personagem:"/>
                <CampoTexto label="Imagem:"/>

                
                <div className='fim-formulario'>
                    <Botao className="botao-formulario">
                    Confirme Aqui
                    </Botao>

                    <img className='logo' src='/img/DeD_logo.png' alt="logo"></img>
                
                </div>

            </form>
        </section>
    )
}

export default Formulario