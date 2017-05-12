import React from 'react';

class Busca extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: "active" }
    this.formUpdateSearch = this.formUpdateSearch.bind(this);
  }
 
  formUpdateSearch(event){
    this.props.updateSearch(event);
  }

  render() {
    return (
      <form>
        <div className="input-field">
          <label htmlFor="">Busca</label>
          <input type="text" onChange={this.formUpdateSearch} placeholder="Digite sua busca" value={this.props.busca} />
        </div>
        <p>{this.props.busca}</p>
      </form>
    );
  }

}

// module.exports = Busca;
// ou 
export default Busca;