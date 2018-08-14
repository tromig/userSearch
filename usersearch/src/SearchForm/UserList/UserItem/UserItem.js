import React, { Component } from 'react';
import "./UserItem.css";

class UserItem extends Component {

	render(){
		return (			
			<li class="userItem">
				<img src={this.props.thumb} alt='user thumb'/>
				<div class='item-content'>
					<div class='item-name'>{this.props.name}</div>
					<div class='item-age'>Age: {this.props.age}</div>
					<div class='item-loc'>{this.props.loc}</div>
					<div class='item-dob'>{this.props.dob}</div>
				</div>
			</li>
		);
	}
}

export default UserItem;