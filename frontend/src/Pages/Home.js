import React from "react";
import CardTiles from "../Components/CardTiles";
import "../CSS/Home.css";

export default function Home({ pharmacies }) {
	return (
		<div className="home-container">
			{pharmacies &&
				pharmacies.map((pharmacy) => <CardTiles pharmacy={pharmacy} />)}
		</div>
	);
}
