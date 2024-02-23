import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';
import Checkout from './components/Checkout';
import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
    count: 0
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
    count: 0
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
    count: 0
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
    count: 0
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
    count: 0
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
    count: 0
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
    count: 0
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
    count: 0
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
    count: 0
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
    count: 0
  }
];


function App() {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
      setCart([...cart, item]);
      item.count++;
    };
  
    const remItem = (item) => {
      const newCart = cart.filter(cartItem => cartItem.id !== item.id);
      setCart(newCart);
      if(item.count > 0)
      {
        item.count--;
      }
    };

    const updateTotal = () => {
      return cart.reduce((total, item) => total + item.price, 0);
    };

    const showOrder = () => {
      if (cart.length === 0)
      {
        alert('No items in cart');
      }
      else
      {
        const itemCounts = cart.reduce((counts, item) => {
          counts[item.title] = (counts[item.title] || 0) + 1;
          return counts;
        }, {});
      
        const receipt = Object.entries(itemCounts)
          .map(([item, count]) => `${item} (${count})`)
          .join(', ');
      
        alert(`Order Placed!\nYou've ordered: ${receipt}`);
      }
    };
    

    const clearCart = () => {
      menuItems.forEach(item => {
        item.count = 0;
      });
      setCart([]);
    };
    return (
      <div>
        <Header/>
        <div className="menu">
        {menuItems.map((item) => (
          <MenuItem 
            key = {item.id} 
            title = {item.title} 
            description = {item.description}
            image = {item.imageName}
            price = {item.price}
            count = {item.count}
            addItem={() => addItem(item)}
            remItem={() => remItem(item)}
          />
        ))}

        </div>
        <Checkout 
          showOrder={showOrder} 
          clearCart={clearCart} 
          updateTotal={updateTotal}
      />
      </div>
    );
}

export default App;
