import React, {Component} from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';
import Footer from './componentes/Footer';

class App extends Component {
  state = {
    noticias: []
  }


  componentDidMount(){
    this.consultarNoticias();
  }
  consultarNoticias = (categoria = 'general') => {

    let url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&PageSize=21&apiKey=e21531ae5df742fea0781b4bf9775330`;
  
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({
          noticias: noticias.articles

        });
      })
  }

  render(){
    return (
      <div className="contenedor-app">
        <Header
          titulo='Noticias de Argentina en React'
        />
        
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias = {this.consultarNoticias}
          />
          <Noticias
            noticias = {this.state.noticias}
          />
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
