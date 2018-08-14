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


	render(){
		const userItems = this.props.users.map((user) => (
															<UserItem thumb={user.picture.thumbnail} 
																	  name={user.name.first + ' ' + user.name.last}	
																	  age={user.dob.age}
																	  dob={this.formatDate(user.dob.date)}
																	  loc={user.location.street + ", " + user.location.city + ", " + user.location.state}

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






