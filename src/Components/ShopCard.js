import React from 'react';

export const ShopCard = (props) => {
  const {cards} = props;
  return (
      <ul className={cards}>
        {cards.map((item, index) => (
            <li className="card" key={index}>
              <h2>{item.name}</h2>
              <p>{item.color}</p>
              <img src={item.img} alt="Картинка"/>
              <div className="card-bottom">
                <span>${item.price}</span>
                <button>Add to cart</button>
              </div>
            </li>
        ))}
      </ul>
  );
};
