import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Houses from './containers/Houses/Houses';

class App extends Component {
  render()
  {
    return(
      <div>
        <Layout/>
        <Houses/>
       
      </div>

    )

  }

}

export default App;
