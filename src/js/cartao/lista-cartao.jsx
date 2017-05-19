import React from 'react';
import axios from 'axios';
import Cartao from './cartao';
import Busca from '../busca/busca';


class ListCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      search: '',
      dataList: [],
      dataServerList:[]
    };
    this.addClick = this.addClick.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.onSubmitList = this.onSubmitList.bind(this);
  }

  componentDidMount() {
    let self = this;
    axios.get('http://localhost:8080/servidor.php?dados=1').then(function(response){
      self.setState({
        dataList: response.data,
        dataServerList: response.data
      })
    });
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

  updateSearch(event) {
    this.setState({ search: event.target.value });
    if(event.target.value == ""){
      this.setState({
        dataList: this.state.dataServerList
      })
    }
  }

  onSubmitList(event) {
    console.log(this.state.search);
    let userSearch = this.state.search;
    let userData = this.state.dataServerList;

    let newList = userData.filter(function(item){
      if(item.titulo.toUpperCase().indexOf(userSearch.toUpperCase()) > -1 || item.descricao.toUpperCase().indexOf(userSearch.toUpperCase()) > -1 || item.detalhe.toUpperCase().indexOf(userSearch.toUpperCase()) > -1){
        return item;
      }
    });

    this.setState({
      dataList: newList 
    })

  }

  render() {
    let noticias = this.state.dataList;
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
        <Busca updateSearch={this.updateSearch} busca={this.state.search} onSubmit={this.onSubmitList} />
        <p>Quantidade de clicks: {this.state.clicks}</p>
        {line}
      </div>
    );
  }
}

export default ListCards;