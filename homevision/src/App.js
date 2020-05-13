import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Houses from './containers/Houses/Houses';
import './App.css';

class App extends Component {
  render()
  {
    return(
      <div className="Container">
        <Layout/>
        <Houses/>
       
      </div>

    )

  }

}

export default App;
