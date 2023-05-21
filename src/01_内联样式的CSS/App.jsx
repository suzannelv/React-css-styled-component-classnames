import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()

    this.state={
      titleSize : 30
    }
  }

  addTitleSize(){
    this.setState({titleSize: this.state.titleSize +2})
  }
  render() {
    const {titleSize} = this.state
    return (
      <div>
        <button onClick={e=> this.addTitleSize()}>size+2</button>
        <h2 style={{color:"red", fontSize: `${titleSize}px`}}>title</h2>
        <p style={{color:"blue", fontSize: "18px"}}>contenu</p>
      </div>
    )
  }
}

export default App
