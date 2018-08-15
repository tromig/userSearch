import React, {Component} from 'react';
import "./SearchForm.css";
import UserList from "./UserList/UserList";
import SearchInput from "./SearchInput/SearchInput";

class SearchForm extends Component{

	constructor(){
		super();
		this.state = {
			userData: [],
			showData: [],
		};
	}

	componentDidMount(){
		fetch('https://randomuser.me/api/?results=100')
			.then(response => response.json())
			.then(data => this.processData(data));
	}

	processData(data){
		this.setState({
			userData: data.results,
			showData: data.results,
		});
	}	

	render(){
		return (
			<div className='searchForm'>			    
			    <SearchInput />
			    <UserList userData={this.state.showData} />
			</div>
		);
	}
}

export default SearchForm;