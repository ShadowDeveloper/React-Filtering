import React from 'react';
import Cartao from './cartao';


class ListCards extends React.Component {
  render() {
    let noticias = [
      { titulo: 'Title 1', descricao: 'Descricao 1', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
      { titulo: 'Title 1', descricao: 'Descricao 1', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
      { titulo: 'Title 1', descricao: 'Descricao 1', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
      { titulo: 'Title 1', descricao: 'Descricao 1', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
      { titulo: 'Title 1', descricao: 'Descricao 1', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
      { titulo: 'Title 1', descricao: 'Descricao 1', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
      { titulo: 'Title 1', descricao: 'Descricao 1', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' }
    ];
    let aux = [];
    let novalista = [];
    for (let k = 0; k < noticias.length; k++) {
      aux.push(noticias[k]);
      if (aux.length == 3) {
        novalista.push(aux);
        aux = [];
      } else if (k == noticias.length - 1) {
        novalista.push(aux);
      }
    }
    
    let listOfCards = function(group){
      return group.map(function(items,i){
        return (
          <div key={i} className="col m4">
            <Cartao />
          </div>
        );
      });

    };

    let line = novalista.map(function (group,i) {
      return (
        <div key={i} className="row">
          {listOfCards(group)}
        </div>
      );
    });

    return (
      <div>
        {line}
      </div>
    );
  }
}

export default ListCards;