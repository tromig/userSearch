import React, { Component } from 'react';
import "./UserItem.css";

class UserItem extends Component {

	render(){
		return (
			<li className="userItem">{this.props.name}</li>
		);
	}
}

export default UserItem;