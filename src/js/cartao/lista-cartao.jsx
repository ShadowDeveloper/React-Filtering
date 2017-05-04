import React from 'react';


class ListCards extends React.Component{
  render(){
    let noticias = [
      {titulo:'Title 1', descricao:'Descrição 1', detalhe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
      {titulo:'Title 1', descricao:'Descrição 1', detalhe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
      {titulo:'Title 1', descricao:'Descrição 1', detalhe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
      {titulo:'Title 1', descricao:'Descrição 1', detalhe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
      {titulo:'Title 1', descricao:'Descrição 1', detalhe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
      {titulo:'Title 1', descricao:'Descrição 1', detalhe:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'}
    ];
    let aux = [];
    let novalista = [];
    for (let k = 0; k < noticias.length; k++) {
      aux.push(noticias[k]);
      if(aux == 4){
        novalista.push(aux);
        aux = [];
      }else if(k == noticias.length - 1){
        novalista.push(aux);
      }
    }

    return (
      <h1>{aux}</h1>
    );
  }
}

export default ListCards;