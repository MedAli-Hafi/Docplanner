import React, { Component } from 'react';
import Nav from "./components/nav-bar"
import Main from './components/main/main';
import Poc from"./components/footer/section9";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <Nav/>
     <Main/>
     <Poc/>
  
    </div> );
  }
}
 
export default App;
