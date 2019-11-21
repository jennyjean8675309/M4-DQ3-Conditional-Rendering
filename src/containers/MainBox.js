import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      activeItem: ''
    }
  }

  handleItemClick = (event) => {
    this.setState({
      activeItem: event.target.id
    })
  }

  whichComponent = (item) => {
    // to make this neater I could refactor it into a case statement

    if (item === 'profile') {
      return <Profile />
    } else if (item === 'photo') {
      return <Photos />
    } else if (item === 'cocktail') {
      return <Cocktails />
    } else {
      return <Pokemon />
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar handleItemClick={this.handleItemClick} />
        {this.whichComponent(this.state.activeItem)}
      </div>
    )
  }

}

export default MainBox
