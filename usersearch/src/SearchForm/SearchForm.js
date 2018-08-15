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
			searchVal: '',
		};

		this.handleSearchChange = this.handleSearchChange.bind(this);
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

	handleSearchChange(event){
		this.setState( { searchVal: event.target.value }, this.processSearch(event.target.value) );
		
	}

	processSearch(searchVal){
		const workArray = this.state.userData.filter((user) => user.name.first.toLowerCase().indexOf(searchVal.toLowerCase()) > -1 ||
															   user.name.last.toLowerCase().indexOf(searchVal.toLowerCase()) > -1  ||
															   String(user.dob.age).indexOf(searchVal.trim()) > -1
		);						
		this.setState({
			showData: workArray
		});
	}

	render(){
		return (
			<div className='searchForm'>			    
			    <SearchInput searchVal={this.state.searchVal} onChange={this.handleSearchChange}/>
			    <UserList userData={this.state.showData} />
			</div>
		);
	}
}

export default SearchForm;