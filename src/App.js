import React, {Component} from 'react';
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'


class App extends Component{

  state ={
    termino : "",
    imagenes : []
  }

  consultarApi = ()=>{

    const url = `https://pixabay.com/api/?key=17710691-062ada0a2424aa06b41df708a&q=${this.state.termino}&per_page=30`;

    //console.log(url);

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes: resultado.hits}));
  }

  datosBusqueda = (termino)=>{
    //console.log(termino);
    this.setState({
      termino
    }, ()=>{
      this.consultarApi();
    })
  }


render() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center"><b>¡Buscador de imágenes!</b></p>
        <Buscador
          datosBusqueda={this.datosBusqueda}
        />
      </div>
      <Resultado
        imagenes = {this.state.imagenes}
      />
    </div>
  );
}
}

export default App;
