import React, { Component } from 'react';
import "./UserItem.css";

class UserItem extends Component {

	render(){
		return (			
			<li className="userItem">
				<img src={this.props.thumb} alt='user thumb'/>
				<div className='item-content'>
					<div className='item-name'>{this.props.name}</div>
					<div className='item-age'>Age: {this.props.age}</div>
					<div className='item-loc'>{this.props.loc}</div>
					<div className='item-dob'>{this.props.dob}</div>
				</div>
			</li>
		);
	}
}

export default UserItem;