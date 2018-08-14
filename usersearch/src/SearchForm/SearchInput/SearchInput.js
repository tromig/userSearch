import React, { Component } from "react";
import "./SearchInput.css";


class SearchInput extends Component{

	render(){
		return(
			<div className='searchInput'>
              <input type='text' placeholder="Start typing a name to filter" />
            </div>
		);
	}
}

export default SearchInput;