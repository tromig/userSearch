import React, { Component } from 'react';
import './App.css';
import SearchForm from "./SearchForm/SearchForm";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Header />
        <SearchForm />        
      </div>
    );
  }
}

export default App;
