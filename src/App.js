import Banner from "./componentes/Banner/Banner";
import CampoTexto from "./componentes/CampoTexto";



function App() {
  return (
    <div className="App">
      <Banner/>
      <div className="campo-texto">
        <div className="caixa">

      <CampoTexto label="Nome do Jogador:"/>
      <CampoTexto label="Nome do Personagem:"/>
      <CampoTexto label="Raça:"/>
      <CampoTexto label="Classe:"/>
      <CampoTexto label="Imagem:"/>
        </div>
      </div>

    </div>
  );
}

export default App;
