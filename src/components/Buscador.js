import React, { Component } from 'react'

class Buscador extends Component{

    //ref que permite leer los valores de los inputs
    busquedaRef = React.createRef();

    obtenerDatos = (e) =>{
        e.preventDefault();
        //Tomamos el valor del input
        console.log(this.busquedaRef.current.value);///lee el ref
        //Lo enviamos al componente principal
        this.props.datosBusqueda(this.busquedaRef.current.value);
    }

    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Search your image. Example: dogs"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search"/>
                    </div>
                </div>
            </form>
        );
    }

}

export default Buscador;