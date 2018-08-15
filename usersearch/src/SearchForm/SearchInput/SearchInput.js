import React, { Component } from "react";
import "./SearchInput.css";


class SearchInput extends Component{

	render(){
		return(
			<div className='searchInput'>
              <input type='text' placeholder="Start typing a name to filter" value={this.props.searchVal} onChange={this.props.onChange} />
            </div>
		);
	}
}

export default SearchInput;