import React from 'react';

class NavMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {menuAtivo:'Home'};
    this.alteraActive = this.alteraActive.bind(this);
  }

  alteraActive(titulo,self){
    self.setState({menuAtivo:titulo});
  }
  
  render(){

    // console.log(this.state.menuAtivo);
		
    let self = this;

    let lista = this.props.menulist.map(function(value,i){
			return(
				<li key={value.titulo} onClick={self.alteraActive.bind(null,value.titulo,self)} className={self.state.menuAtivo == value.titulo ? 'active' : ''}><a href={value.link} >{value.titulo}</a></li>
			);
		});

    return(
      <ul id="nav-mobile" className="right">
        {lista}
      </ul>
    );
  }
}

export default NavMenu;