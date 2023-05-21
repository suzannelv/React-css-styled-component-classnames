import React, { PureComponent } from 'react'
import { HomeWrapper, HYButtonWrapper } from './style'

export class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <div className="top">
          <div className="banner">banner content</div>
        </div>
        <div className="bottom">
          <h2 className="header">list</h2>
          <ul className='product-list'>
            <li className='item'>produit</li>
            <li className='item'>produit</li>
            <li className='item'>produit</li>
          </ul>
        </div>

        <HYButtonWrapper>button</HYButtonWrapper>
      </HomeWrapper>
    )
  }
}

export default Home