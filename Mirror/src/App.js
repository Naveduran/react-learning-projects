import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    mirror: ''
  }
  
  updateMirror = (text) => {
  	this.setState(() => ({
    	mirror: text.split("").reverse().join("")
    }))
  }
  
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container" style={{textAlign:"center"}}>

          <input 
			type="text"
			placeholder="Say Something" 
			value={this.state.text}
			onChange={(event) => this.updateMirror(event.target.value)}
		  />
          <p className="echo">Echo:</p>
          
			{this.state.text === ''
            ? (<p>This should mirror the text you typed into the input field.</p>)
            : (<p>{this.state.mirror}</p>)
            }
        </div>
      </div>
    );
  }
}

export default App;
