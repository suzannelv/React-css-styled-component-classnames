import React, { PureComponent } from 'react'
import './App.less'

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <div className="section">
          <h2 className='title'>title</h2>
          <p className='content'>contenu</p>
        </div>
      </div>
    )
  }
}

export default App