import React, { Component } from "react";
import "./SearchInput.css";


class SearchInput extends Component{

	render(){
		return(
			<div className='searchInput'>
              <input type='text' placeholder="filter by first, last or age" value={this.props.searchVal} onChange={this.props.onChange} />
            </div>
		);
	}
}

export default SearchInput;