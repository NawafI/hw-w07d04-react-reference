import React, { Component } from 'react';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';

import './App.css';
import componentInfo from './component/ComponentInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Content/>
      <componentInfo/>
      
      <Footer/>
      </div>
    )
  }
}

export default App;
