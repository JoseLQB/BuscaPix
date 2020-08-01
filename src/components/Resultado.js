import React, { Component } from 'react'
import Imagen from "./Imagen"
import Pagination from './Pagination';

class Resultado extends Component{
    mostrarImagenes =()=>{

        const imagenes = this.props.imagenes;

        if(imagenes.length === 0){
            return null;
        }
        console.log(imagenes);
    
        return(
            <React.Fragment>
            <Pagination
                paginaAnterior ={this.props.paginaAnterior}
                paginaSiguiente ={this.props.paginaSiguiente}
            />
                <div className="col-12 p-5 row">
                    {console.log(imagenes)}
                    {imagenes.map(imagen=>(
                        <Imagen
                            width ={imagen.imageHeight}
                            key={imagen.id}
                            imagen ={imagen}
                        />
                    ))}
                    
                </div>
                <Pagination
                    paginaAnterior ={this.props.paginaAnterior}
                    paginaSiguiente ={this.props.paginaSiguiente}
                />
            </React.Fragment>
        )
    }
    render(){
        return(
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
        );
    }


}

export default Resultado;