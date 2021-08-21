import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import "../CSS/Pharmacy.css";

export default function Pharmacy({ pharmacy, cart, setCart }) {
	return (
		<div className="pharmacy-container">
			<div className="container-left">
				{pharmacy &&
					pharmacy.items.map((medItem) => (
						<CartItem
							cart={cart}
							item={medItem}
							setCart={setCart}
						/>
					))}
			</div>
			<div className="container-right">
				<div className="pharmacy-details-container">
					<span className="pharmacy-details-name">
						{pharmacy && pharmacy.placeName}
					</span>
					<span className="pharmacy-details-medicine">
						{pharmacy && pharmacy.distance} meters from you
					</span>
					<span className="pharmacy-details-medicine">
						{pharmacy && pharmacy.placeAddress}
					</span>
				</div>
				<div className="goto-cart">
					<Link to="/cart">
						<button className="goto-cart-button">Go To Cart</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
