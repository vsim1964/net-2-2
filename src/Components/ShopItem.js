import React from 'react';

export const ShopItem = (props) => {
  const {cards} = props;
  return (
      <ul className="lists">
        {cards.map((item, index) => (
            <li className="list" key={index}>
              <h2>{item.name}</h2>
              <p>{item.color}</p>
              <img src={item.img} alt="Картинка"/>
              <span>${item.price}</span>
              <button>Add to cart</button>
            </li>
        ))}
      </ul>
  );
};
