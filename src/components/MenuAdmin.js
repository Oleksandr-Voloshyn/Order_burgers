import React, {Component} from 'react';
import AddBurgetForm from "./AddBurgerForm";

class MenuAdmin extends Component {
  render() {
    return (
      <div className='menu-admin'>
        <h2> Управління меню</h2>
        <AddBurgetForm addBurger={this.props.addBurger}/>
        <button onClick={this.props.loadSampleBurger }> Загрузити бургери</button>


      </div>
    );
  }
}

export default MenuAdmin;
