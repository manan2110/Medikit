import { Link } from "react-router-dom";
import React from "react";
import "../CSS/CardTile.css";
import { MedicineBoxOutlined } from "@ant-design/icons";

export default function CardTiles({ pharmacy }) {
	const redirectLink = `/pharmacy/${pharmacy.eLoc}`;
	return (
		<div className="card-container">
			<MedicineBoxOutlined />
			<Link to={redirectLink} className="pharmacy-link">
				<span className="pharmacy-details pharmacy-name">
					{pharmacy.placeName}
				</span>
			</Link>
			<span className="pharmacy-details">
				<span className="pharmacy-details-distance">
					{pharmacy.distance}
				</span>{" "}
				meters away
			</span>
			<span className="pharmacy-details">{pharmacy.placeAddress}</span>
		</div>
	);
}
