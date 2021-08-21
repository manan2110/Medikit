import React, { useEffect } from "react";
import { Avatar, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

export default function Navbar({ items, cart, setCart, user, setUser }) {
	const handleLogout = () => {
		localStorage.getItem("token") && localStorage.removeItem("token");
		setUser(null);
	};

	useEffect(() => {}, [items, user]);

	const onSearchBarChange = (_event, item) => {
		if (item == null) return;
		if (item.pk in cart) return;
		cart[item.pk] = 1;
		setCart(cart);
	};

	return (
		<div className="navbar">
			<input type="checkbox" id="nav-check"></input>
			<Link to="/" className="home-link">
				<div className="logo">MEDGUIDE</div>
			</Link>
			<Autocomplete
				className="searchbar"
				options={Object.values(items)}
				getOptionLabel={(item) => item.name}
				onChange={onSearchBarChange}
				renderInput={(params) => (
					<TextField {...params} label="Search" variant="outlined" />
				)}
			/>
			<label for="nav-check">
				<span></span>
				<span></span>
				<span></span>
			</label>
			<div className="button-container">
				{user ? (
					<>
						<div className="avatar">
							<Avatar>A</Avatar>
						</div>
						<Link to="/video">
							<button className="login-btn">
								Consult Doctor
							</button>
						</Link>
						<button className="login-btn" onClick={handleLogout}>
							LogOut
						</button>
					</>
				) : (
					<>
						<Link to="/login">
							<button className="login-btn">Log In</button>
						</Link>
						<Link to="/video">
							<button className="login-btn">
								Consult Doctor
							</button>
						</Link>
					</>
				)}
			</div>
		</div>
	);
}
