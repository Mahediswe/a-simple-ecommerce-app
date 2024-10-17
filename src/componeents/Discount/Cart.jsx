import React from 'react';
import { useCart } from 'react-use-cart';
import Discount from './Discount';
const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    
      if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div>
        <h1>Cart ({totalUniqueItems})</h1>

{/* <ul>
  {items.map((item) => (
    <li key={item.id}>
      {item.quantity} x {item.name} &mdash;
      <button
        onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
      >
        -
      </button>
      <button
        onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
      >
        +
      </button>
      <button onClick={() => removeItem(item.id)}>&times;</button>
    </li>
  ))}
</ul> */}

{items.map((item) => (
        <div key={item.id} style={{ margin: '20px' }}>
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
          <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${cartTotal}</h3>
    </div>
  )
}

export default Cart