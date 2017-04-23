import React from 'react';

class NavMenu extends React.Component{
  render(){

		let lista = this.props.menulist.map(function(value,i){
			return(
				<li key={value.titulo}><a href={value.link + i}>{value.titulo}</a></li>
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