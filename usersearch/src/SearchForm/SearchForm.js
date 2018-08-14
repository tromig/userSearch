import React, {Component} from 'react';
import "./SearchForm.css";
import UserList from "./UserList/UserList";
import SearchInput from "./SearchInput/SearchInput";

class SearchForm extends Component{

	render(){
		return (
			<div className='searchForm'>			    
			    <SearchInput />
			    <UserList />
			</div>
		);
	}
}

export default SearchForm;