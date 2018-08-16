import React, {Component} from 'react';
import "./SearchForm.css";
import UserList from "./UserList/UserList";
import SearchInput from "./SearchInput/SearchInput";
import FullInfoPanel from "./FullInfoPanel/FullInfoPanel"; 

class SearchForm extends Component{

	constructor(props){
		super(props);
		this.state = {
			userData: [],
			showData: [],
			searchVal: '',
			userIndex: null,
			showFull: false,
		};

		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleUserItemClick = this.handleUserItemClick.bind(this);
		this.escFunction = this.escFunction.bind(this);
		this.closeFullView = this.closeFullView.bind(this);
	}

	componentDidMount(){
		fetch('https://randomuser.me/api/?results=100')
			.then(response => response.json())
			.then(data => this.processData(data));

		document.addEventListener("keydown", this.escFunction, false);
	}

	componentWillUnmount(){
		document.removeEventListener("keydown", this.escFunction, false);
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
		this.setState({ showData: workArray });
	}

	escFunction(event){
	    if(event.keyCode === 27) {
	      this.setState( { showFull: false, userIndex: '' } );
	    }
	}

	 closeFullView(){
	 	this.setState( { showFull: false, userIndex: '' } );
	 }

	handleUserItemClick(event){ 	
		this.setState({ userIndex: event.currentTarget.getAttribute('userindex'), showFull: true });	
	}


	render(){
		return (
			<div className='searchForm'>			    
			    <SearchInput searchVal={this.state.searchVal} onChange={this.handleSearchChange}/>
			    <UserList userData={this.state.showData} itemClickHandler={ this.handleUserItemClick } />
			    { this.state.showData.length > 0 && this.state.showFull &&
			    	<FullInfoPanel userData={this.state.showData[this.state.userIndex]} visible={ this.state.showFull ? "showing" : "hidden"  } closeClick={this.closeFullView}/>
				}
			</div>
		);
	}
}

export default SearchForm;