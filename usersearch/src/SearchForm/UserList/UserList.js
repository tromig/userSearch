import React, {Component} from "react";
import UserItem from "./UserItem/UserItem";
import "./UserList.css";


class UserList extends Component {

	render(){
		return (
			<div className='userList'>
				<ul>
					<UserItem name="Name 1" />
					<UserItem name="Name 2" />
				</ul>
			</div>
		);
	}

}

export default UserList;






