import React, { useEffect, useState } from "react";
import "../CSS/Cart.css";
import CartItem from "../Components/CartItem";

export default function Cart({ user, cart, setCart, items }) {
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

	useEffect(async () => {
		if (user == null) return;
		let res = await fetch(
			`/api/cart/?username=${encodeURIComponent(user)}`,
			{
				mode: "same-origin",
				credentials: "include",
			}
		);
		res = await res.json();
		for (let item in res.cart) {
			cart[item] = res.cart[item];
		}
		setCart(cart);
	}, [user]);

	const handleOnClick = async () => {
		if (user == null) return;
		const data = {
			cart: cart,
			username: user,
		};
		await fetch("/api/cart/", {
			method: "POST",
			mode: "same-origin",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	};

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
				<button className="checkout" onClick={handleOnClick}>
					Proceed to checkout
				</button>
			</div>
		</div>
	);
}
