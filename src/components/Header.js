import React from 'react';

const Header = (props) => {
    return (
      <header className='top'>
        <div className='wrap'>
          <div className='header-content'>

            <div className='header-rating'>
            <div className='header-rating_tag'> Рейтинг: </div>
            <div className='header-rating_icon'> ★★★★★ </div>
            </div>

            <div className='header-divider'></div>
            <h1 className='font-effect-fire-animation'> {props.title}</h1>
            <h3>
              <span>
                Швидка достаквка гарячих
                <span className='sub-header'> бургеров </span>
              </span>
            </h3>
          </div>
        </div>
      </header>
    );

}

export default Header;
