// BackPackModal.js
import React from 'react';

const BackPackModal = ({ cartItems, removeFromCart }) => {
  return (
    <div className="backpack-modal">
      {/* Iterar sobre los elementos del carrito y mostrarlos */}
      {cartItems.map(item => (
        <div key={item.id}>
          {item.title} - {item.quantity}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default BackPackModal;