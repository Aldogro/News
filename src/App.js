import React, {Component} from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';

class App extends Component {
  state = {
    noticias: []
  }


  componentDidMount(){
    this.consultarNoticias();
  }
  consultarNoticias = () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=ar&category=general&apiKey=e21531ae5df742fea0781b4bf9775330';
    // console.log(url);
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
          titulo='Noticias en React'
        />
        <div className="container white contenedor-noticias">
          <Noticias
            noticias = {this.state.noticias}
          />
        </div>
      </div>
    )
  }
}

export default App;
