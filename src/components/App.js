import React, {Component} from 'react';
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";

class App extends Component {
  state = {
    burgers: {},
    order: {}
  }

  addBurger = (burger) => {
    console.log('brher', burger)
// 1. Робимо копію state
    const burgers = {...this.state.burgers}
    // 2. Добавити новий бургер в змінну  burgers
    burgers[`burger${Date.now()}`] = burger
    // 3. Записати наш новий обєкт burgers в state
    this.setState({burgers})
  }

  loadSampleBurger = () => {
    this.setState({burgers: sampleBurgers})
  }

  render() {
    return (
      <div className='burger-paradise'>
        <div className='menu'>
          <Header title={"Very hot burger"}/>
        </div>
        <Order/>
        <MenuAdmin
          addBurger={this.addBurger}
          loadSampleBurger={this.loadSampleBurger}
        />
      </div>
    );
  }
}

export default App;
