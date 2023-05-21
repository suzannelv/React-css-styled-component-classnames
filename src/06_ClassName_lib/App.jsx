import React, { PureComponent } from 'react'
import classNames from 'classnames'

export class App extends PureComponent {
  constructor(){
    super()

    this.state = {
      isbbb: false,
      isccc:true
    }
  }
  render() {
    const {isbbb, isccc} = this.state

    const classList = ["aaa"]
    if(isbbb) classList.push("bbb")
    if(isccc) classList.push("ccc")
    const classname = classList.join(" ")

    return (
      <div>
        <h2 className={`aaa ${isbbb? 'bbb':''} ${isccc? 'ccc':''}` }>bonjour</h2>
        <h2 className={classname}>coucou</h2>
        <h2 className={classNames("aaa", {bbb:isbbb, ccc:isccc})}>salut</h2>
        <h2 className={classNames(['aaa', {bbb:isbbb, ccc:isccc}])}>react</h2>
      </div>
    )
  }
}

export default App