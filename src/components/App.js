import React, {Component} from 'react';
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";
import Burger from "./burger";
import base from "../base"

class App extends Component {
  state = {
    burgers: {},
    order: {}
  };

  componentDidMount() {
    const {params} = this.props.match
    this.ref = base.syncState(`${params.restaurantId}/burgers`,{
      context: this,
      state: 'burgers'
    })
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addBurger = (burger) => {
// 1. Робимо копію state
    const burgers = {...this.state.burgers}
    // 2. Добавити новий бургер в змінну  burgers
    burgers[`burger${Date.now()}`] = burger
    // 3. Записати наш новий обєкт burgers в state
    this.setState({burgers})
  }

  loadSampleBurger = () => {
    this.setState({burgers: sampleBurgers})
  };

  addToOrder = (key) => {
    // 1. Робимо копію обєкта state
    const order = {...this.state.order}
    //  2. Добавити ключ до заказу зі значенням 1 або обновити теперю значення
    order[key] = order[key] + 1 || 1;
    // 3. Записати наш новий обєкт order в state
    this.setState({order})
  }

  render() {
    return (
      <div className='burger-paradise'>
        <div className='menu'>
          <Header title={"Very hot burger"}/>
            <ul className='burgers'>
              {Object.keys(this.state.burgers).map(key => {
                return <Burger
                  key={key}
                index={key}
                  addToOrder={this.addToOrder}
                details={this.state.burgers[key]}/>
              })}
            </ul>
        </div>
        <Order burgers={this.state.burgers} order={this.state.order}/>
        <MenuAdmin
          addBurger={this.addBurger}
          loadSampleBurger={this.loadSampleBurger}
        />
      </div>
    );
  }
}

export default App;
