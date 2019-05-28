import React, { Component } from 'react';

class Formulario extends Component {

  categoriaRef = React.createRef();

  cambiarCategoria = (e) => {
    e.preventDefault();

    //enviar por props
    this.props.consultarNoticias(this.categoriaRef.current.value);
  }

  render() {
    return (
      <div>
        <div className="buscador row">
          <div className="col s12 m8 offset-m2">
            <form onSubmit={this.cambiarCategoria}>
              <h2>Categorías</h2>
              <div className="input-field col s12 m8">
                <select ref={this.categoriaRef}>
                  <option value="general" defaultValue>General</option>
                  <option value="science">Ciencia</option>
                  <option value="sports">Deportes</option>
                  <option value="entertainment">Entretenimiento</option>
                  <option value="business">Negocios</option>
                  <option value="health">Salud</option>
                  <option value="technology">Tecnología</option>
                </select>
              </div>
              <div className="input-field col s12 m4 enviar">
                <input type="submit" className="btn" style={{backgroundColor:'#FFED66',color:'black'}} value="Buscar"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;