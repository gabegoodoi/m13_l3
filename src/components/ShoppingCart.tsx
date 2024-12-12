import React, { useReducer } from 'react';

// Shopping cart objecrt attributes defined
interface ShoppingCartItem {
  id: number;
  name: string;
  price: number;
}

// initial state defined as a list of ShoppingCartItems that is initially an empty list
const initialState: ShoppingCartItem[] = [];

// ShoppingCartActions defined as custom type with two options (add item or remove item)
type ShoppingCartAction =
  | { type: 'ADD_ITEM'; payload: ShoppingCartItem }
  | { type: 'REMOVE_ITEM'; payload: number };

// shopping cart reducer defined using conditional logic
const shoppingCartReducer = (state = initialState, action: ShoppingCartAction): ShoppingCartItem[] => {
  if (action.type === 'ADD_ITEM') {
    return [...state, action.payload];
  } else if (action.type === 'REMOVE_ITEM') {
    return state.filter(item => item.id !== action.payload);
  } else {
    return state;
  }
};

// Shopping cart component
const ShoppingCart = () => {
  const [cartItems, dispatch] = useReducer(shoppingCartReducer, initialState);

  
  const handleAddItem = (item: ShoppingCartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const handleRemoveItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            {/* buttons to remove items from the cart */}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      {/* buttons to add items to the cart */}
      <button onClick={() => handleAddItem({ id: 1, name: 'Product 1', price: 10 })}>Add Product 1</button>
      <button onClick={() => handleAddItem({ id: 2, name: 'Product 2', price: 20 })}>Add Product 2</button>
    </div>
  );
};

export default ShoppingCart;