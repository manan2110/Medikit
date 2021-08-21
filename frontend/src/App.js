import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Pharmacy from "./Pages/Pharmacy";
import VideoCall from "./Pages/VideoCall";
import res from "./res.json";

export default function App() {
	const [pharmacies, setPharmacies] = useState([]);
	const [items, setItems] = useState({});
	const [cart, setCart] = useState({});
	const [user, setUser] = useState(null);

	useEffect(() => {
		// navigator.geolocation.getCurrentPosition((position) => {
		// 	fetch(
		// 		`/api/pharmacy?latitude=${encodeURIComponent(
		// 			position.coords.latitude
		// 		)}&longitude=${encodeURIComponent(position.coords.longitude)}`,
		// 		{
		// 			credentials: "same-origin",
		// 		}
		// 	)
		// 		.then((res) => res.json())
		// 		.then((res) => setPharmacies(res.nearby_pharmacies));
		// }, [pharmacies]);
		setPharmacies(res.nearby_pharmacies);
		for (let pharmacy of pharmacies) {
			for (let item of pharmacy.items) {
				items[item.pk] = item;
			}
		}
		setItems(items);
	}, [items, pharmacies]);

	return (
		<div className="app">
			<Router>
				<Navbar
					items={items}
					cart={cart}
					setCart={setCart}
					user={user}
					setUser={setUser}
				></Navbar>
				<Route exact path="/login">
					<Login user={user} setUser={setUser} />
				</Route>
				<Route exact path="/cart">
					<Cart items={items} cart={cart} setCart={setCart} />
				</Route>
				{pharmacies.map((pharmacy) => (
					<Route exact path={`/pharmacy/${pharmacy.eLoc}`}>
						<Pharmacy
							pharmacy={pharmacy}
							cart={cart}
							setCart={setCart}
						/>
					</Route>
				))}
				<Route exact path="/">
					<Home pharmacies={pharmacies} />
				</Route>
				<Route exact path="/video/" component={VideoCall} />
			</Router>
		</div>
	);
}
