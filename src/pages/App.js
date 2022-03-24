import React, { Component } from 'react';
import { Button } from 'antd'

class App extends Component{
  render(){
    return(
      <div className="App">
        <div>hello world</div>
        <Button type='primary'>点击</Button>
      </div>
    )
  }
}

export default App;