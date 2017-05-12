import React from 'react';
import Cartao from './cartao';
import Busca from '../busca/busca';


class ListCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      search:''
    };
    this.addClick = this.addClick.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  addClick() {
    // this.setState({ clicks: this.state.clicks + 1 });
    this.setState( // React documentation recomendation
      (prevState) => ({
        clicks: prevState.clicks + 1
      })
    );
    console.log("ok");
  }

  updateSearch(event){
    this.setState({search: event.target.value});
  }

  render() {
    let noticias = [
      { titulo: 'Title 1', descricao: 'Descricao 1', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
      { titulo: 'Title 2', descricao: 'Descricao 2', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
      { titulo: 'Title 3', descricao: 'Descricao 3', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
      { titulo: 'Title 4', descricao: 'Descricao 4', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
      { titulo: 'Title 5', descricao: 'Descricao 5', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
      { titulo: 'Title 6', descricao: 'Descricao 6', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' },
      { titulo: 'Title 7', descricao: 'Descricao 7', detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste' }
    ];

    let aux = [];
    let novalista = [];

    for (let k = 0; k < noticias.length; k++) {
      aux.push(noticias[k]);
      if (aux.length == this.props.qtdPerline) {
        novalista.push(aux);
        aux = [];
      } else if (k == noticias.length - 1) {
        novalista.push(aux);
      }
    }

    let columnSize = "col m" + this.props.colSize;

    let listOfCards = function (group, self) {
      return group.map(function (items, i) {
        return (
          <div key={i} className={columnSize}>
            <Cartao dados={items} propClick={self.addClick} />
          </div>
        );
      });

    };

    let self = this;
    let line = novalista.map(function (group, i) {
      return (
        <div key={i} className="row">
          {listOfCards(group, self)}
        </div>
      );
    });

    return (
      <div>
        <Busca updateSearch = {this.updateSearch} busca = {this.state.search}/>
        <p>Quantidade de clicks: {this.state.clicks}</p>
        {line}
      </div>
    );
  }
}

export default ListCards;