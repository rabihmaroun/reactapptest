import React from "react";
import './card.css'
import { Link } from "react-router-dom";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  to: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, to }) => {
  return (
    <Link to={to} className="card shadow py-2 px-3 bill__card">
      <img src={imageSrc} alt="" />
      <h4 className="mt-1 mb-0 bold-font">{title}</h4>
      <p>{description}</p>
    </Link>
  );
};

export default Card;
