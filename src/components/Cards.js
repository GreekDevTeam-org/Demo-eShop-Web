import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check our products !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://letket.com/wp-content/uploads/2020/09/Logos.jpg'
              text='Explore our Produts'
              label='Products'
              path='/products'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
