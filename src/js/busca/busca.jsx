import React from 'react';

class Busca extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: "active" }
    this.formUpdateSearch = this.formUpdateSearch.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
 
  formUpdateSearch(event){
    this.props.updateSearch(event);
  }


  onSubmitForm(event){
    this.props.onSubmit(event);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <div className="input-field">
          <label htmlFor="">Busca</label>
          <input type="text" onChange={this.formUpdateSearch} placeholder="Digite sua busca" value={this.props.busca} />
        </div>
        <p>{this.props.busca}</p>
        <button>Buscar</button>
      </form>
    );
  }

}

// module.exports = Busca;
// ou 
export default Busca;