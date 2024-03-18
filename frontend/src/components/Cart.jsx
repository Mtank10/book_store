import React, { useState, useEffect } from 'react';
import ApiRequests from '../services/ApiService';

const Cart = ({ user }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user) {
      fetchCartItems();
    }
  }, [user]);

  const fetchCartItems = async () => {
    try {
      const data = await ApiRequests.getCartItems();
      setCartItems(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleRemoveFromCart = async (itemId) => {
    try {
      await ApiRequests.removeFromCart(itemId);
      fetchCartItems(); // Refresh cart items after removal
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div className="cart">
      {user ? (
        <>
          <h2>Cart</h2>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.title}</p>
              <p>${item.price}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </>
      ) : (
        <p>Please login to view your cart</p>
      )}
    </div>
  );
};

export default Cart;
