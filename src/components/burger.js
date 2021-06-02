import React, {Component} from 'react';

class Burger extends Component {


  render() {
    const {image, name, price, desc, status} = this.props.details;
    const isAvailale = status === 'available';
    return (
      <div>
        <li className='menu-burger'>
          <div className='image-container'>
            <img src={image} alt={name}/>
          </div>

          <div className='burger-details'>
            <h3 className='burger-name'>
              {name}
              <span className='price'> {price}₴</span>
            </h3>
            <p> {desc}</p>
            <button
              className='buttonOrder'
              disabled={!isAvailale}
            onClick={() => this.props.addToOrder(this.props.index)}>
              {isAvailale ? 'Замовити' : 'Тимчасово немає'}
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default Burger;
