import React from 'react';

const Noticia = (props) => {
  const {urlToImage, url, title, description, source} = props.noticia;

  return (
    <div className="col l4 s12">
      <div className="card hoverable">
        <div className="card-image">
          <img src={urlToImage} alt="{title}" style={{maxHeight:'150px', overflow: 'hidden'}}/>
          <span className="card-title" style={{backgroundColor : 'rgba(0,0,0,0.4)', width : '100%'}}>{source.name}</span>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
        <div className="card-content" style={{maxHeight:'200px', overflow: 'hidden'}}>
          <p><b>{title}</b></p>
          <p className="truncate">{description}</p>
        </div>
      </div>
     
    </div>
  );
};

export default Noticia;