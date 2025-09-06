import React from "react";
import { CardProps } from "../../interfaces";

export default function Card({
  title,
  city,
  checkInType,
  rescheduleType,
  rating,
  price,
  image,
  amenities
}: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-city">{city}</p>
        <div>
          <span>Check-in: {checkInType}</span>
          <span>Reschedule: {rescheduleType}</span>
        </div>
        <div>⭐ {rating}</div>
        <div>{typeof price === "number" ? `$${price}` : price}</div>
      </div>
    </div>
  );
}