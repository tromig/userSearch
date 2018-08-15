import React, {Component} from "react";
import UserItem from "./UserItem/UserItem";
import "./UserList.css";


class UserList extends Component {
	

	formatDate(dateString){
		let workDate = dateString.split("T")[0];
		workDate = workDate.split('-');
		workDate = workDate.map((num) => num[0] === '0' ? num[1] : num);
		return workDate[1]+'/'+workDate[2]+"/"+workDate[0];
	}

	formatName(user){
		return user.name.first + ' ' + user.name.last;
	}

	formatLoc(user){
		return user.location.street + ", " + user.location.city + ", " + user.location.state
	}
	
	render(){
		const userItems = this.props.userData.map((user) => (
															<UserItem thumb={user.picture.thumbnail} 
																	  name={this.formatName(user)}	
																	  age={user.dob.age}
																	  dob={this.formatDate(user.dob.date)}
																	  loc={this.formatLoc(user)}
																	  key={user.login.uuid}
														/>));	
		return (
			<div className='userList'>
				<ul>
					{userItems}
				</ul>
			</div>
		);
	}
}



export default UserList;
