import React, { useState, useEffect } from "react";

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch cart items from local storage or state management
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCartItems);
    }, []);

    const removeFromCart = (index) => {
        // Remove item from cart and update state/local storage
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <img src={item.product_images} alt="img" height={"200px"}/>
                            <h3>{item.product_name}</h3>
                            <p>Price: ₹{item.price}</p>
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;