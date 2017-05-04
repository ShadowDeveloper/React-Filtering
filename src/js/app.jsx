import ReactDOM from 'react-dom';
import React from 'react';

// Components
import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import ListCards from './cartao/lista-cartao';



let App = (
  <div>
    <Navbar titulo="React Logo" navcolor="blue" />
    <div className="container">
      <Titulo />
      <ListCards qtdPerLine="4" colSize="3" />
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById("app"));