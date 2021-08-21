import React, { useEffect, useState } from "react";
import "../CSS/Cart.css";
import CartItem from "../Components/CartItem";

export default function Cart({ cart, setCart, items }) {
	const [cartAmount, setCartAmount] = useState(0);
	const [cartPrice, setCartPrice] = useState(0);

	useEffect(() => {
		let _cartAmount = 0;
		let _cartPrice = 0;
		for (let itemPk in cart) {
			_cartAmount += parseInt(cart[itemPk]);
			_cartPrice += parseInt(cart[itemPk]) * items[itemPk].price;
		}
		setCartAmount(_cartAmount);
		setCartPrice(_cartPrice);
	}, [cart, items]);

	return (
		<div className="cartscreen__container">
			<div className="cartscreen__left">
				{Object.keys(cart) &&
					Object.keys(cart).map((itemPk) => (
						<CartItem
							cart={cart}
							item={items[itemPk]}
							setCart={setCart}
						/>
					))}
			</div>
			<div className="cartscreen__right">
				<div className="cartscreen__info">
					<span>Total Items: {cartAmount}</span>
					<span>Total Price: Rs {cartPrice.toFixed(2)}</span>
				</div>
				<button className="checkout">Proceed to checkout</button>
			</div>
		</div>
	);
}
