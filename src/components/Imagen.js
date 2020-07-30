import React from 'react'

const Imagen = (props)=>{

    const {largeImageURL, likes, previewURL, tags, views} = props.imagen;
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div cardName="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">Likes: {likes}  </p>
                    <p className="card-text">Views: {views}</p>
                    <a href={largeImageURL} target="_blank" className="btn btn-outline-info">Ver Imagen</a>
                    {}
                    
                </div>
            </div>

        </div>
    )
}

export default Imagen;