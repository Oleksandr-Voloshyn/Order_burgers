import React, {Component} from 'react';
import restaurants from "../sample-restaurants";

class Landing extends Component {
state = {
  display: false,
  title: '',
  url: ''
}

displayList = () => {
  const {display} = this.state;
  this.setState({display: !display});
};

getTitle = (restaurant) => {
  console.log(restaurant)
  const {title, url} = restaurant;
  this.setState({title: title, url: url, display: false})
}

goToRestaurat = () => {
  const {url} = this.state
  this.props.history.push(`/restaurant/${url}`)
}


  render() {
    return (
      <div className='restaurant_select'>
        <div className='restaurant_select_top'>

          <div onClick={this.displayList}
               className='restaurant_select_top-header font-effect-outline'
          >
            {this.state.title ? this.state.title : 'Виберіть ресторан'}
          </div>
          <div className='arrow_picker'>
            <div className='arrow_picker-up'></div>
            <div className='arrow_picker-down'></div>
          </div>
        </div>

        {this.state.display ? (
          <div className='restaurant_select_bottom'>
          <ul>
            {restaurants.map(restaurant => {
              return (
              <li onClick={() => this.getTitle(restaurant)}
                  key={restaurant.id}
              >{restaurant.title}</li>
              )})}
          </ul>

        </div>
        ):null}
        {this.state.title && !this.state.display ? (
          <button onClick={this.goToRestaurat}> Перейти в ресторан</button>
        ): null}
      </div>

    );
  }
}

export default Landing
