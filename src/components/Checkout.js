import React from 'react';

const Checkout = ({ showOrder, clearCart, updateTotal }) => {
  return (
    <div className = 'container'>
      <p>Subtotal: ${updateTotal().toFixed(2)}</p>
      <button className = 'checkout-button' onClick={showOrder}>Order</button>
      <button className = 'checkout-button' onClick={clearCart}>Clear All</button>
    </div>
  );
};

export default Checkout;
