import React, { Component } from 'react'

class Foot extends Component {
    render() {
        return (
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left footcent">
                    <div className="col-md-8 mt-md-0 mt-3">
                        <h4 className="titulo">
                            <p>BuscaPix has been developed by Jose Luis Quintanilla Blanco</p>
                        </h4>

                        <ul>
                            <li>GitHub: <a href="https://github.com/JoseLQB" target="_blank" rel="noopener noreferrer">JoseLQB</a></li>
                            <li>Email: <a href="mailto:josequinbla@gmail.com">josequinbla@gmail.com</a></li>
                        </ul><br/>

                    </div>

                </div>
            </footer>

        )

    }
}



export default Foot;