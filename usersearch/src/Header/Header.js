import React, { Component } from 'react';
import "./Header.css";
import userIcon from "../images/user.png";

class Header extends Component{
	render(){
		return(
			<header className="header"> 
				<img src={userIcon} alt='user icon' />
			  	<h1 className="header-title">Search a user, click to view:</h1>
			</header>
		);
	}
}

export default Header;