import React from 'react';
import ListCards from './lista-cartao';

class Cartao extends React.Component{
  render(){
    return(
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="http://materializecss.com/images/office.jpg" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Titulo<i className="material-icons right">more_vert</i></span>
          <p>Descricao</p>
        </div>
        <div className="card-action">
          <a href="#">Ver mais</a>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Sobre<i className="material-icons right">Fechar</i></span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio perspiciatis natus ex sunt dolorem voluptatibus impedit.</p>
        </div>
        <ListCards />
      </div>
    );
  }
}

export default Cartao;