import React, {Component} from 'react';
import "./SearchForm.css";
import UserList from "./UserList/UserList";
import SearchInput from "./SearchInput/SearchInput";

class SearchForm extends Component{

	constructor(props){
		super(props);

		this.state = {
			userData: ''
		};
	}

	render(){
		return (
			<div className='searchForm'>			    
			    <SearchInput />
			    <UserList users={this.state.userData} />
			</div>
		);
	}
}

export default SearchForm;