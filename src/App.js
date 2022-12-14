import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Index";



function App() {
  return (
    <div className="App">
      <Banner/>
      <section style={{backgroundImage:"url('/img/fundo_section1.jpg')"}}>
        <div className="campo-texto">
          <div className="caixa" style={{backgroundImage:"url('/img/pergaminho.jpg')"}}>
            <Formulario/>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
