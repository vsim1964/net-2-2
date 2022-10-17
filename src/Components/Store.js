import React, {useState} from 'react';
import {IconSwitch} from './IconSwitch';
import products from './Data/products';
import {ShopCard} from './ShopCard';
import {ShopItem} from './ShopItem';

function Store() {
  const [view, setView] = useState(true);
  let icon = '';

  if (view === true) {
    icon = 'view_list'
  } else {icon = 'view_module'}

  const handler = () => {
   setView(!view)
  }

  return (
      <>
        <IconSwitch icon={icon} onClick={handler}/>
        {icon === 'view_list' ? <ShopItem cards={products}/> : <ShopCard cards={products}/>}
      </>
  );
}

export default Store;
