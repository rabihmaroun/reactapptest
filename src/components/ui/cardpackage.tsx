import React from 'react'
import { Link } from 'react-router-dom';
import './cardpackage.css'

interface CardProps{
  logo:string;
  price:number;
  description:string;
  to: string;
}

function CardPackage(props: CardProps) {
  return (
    <Link to={props.to} className='card__package shadow'>
      <img src={props.logo} alt="" />
      <div className="texts">
        <div className="mb-0 price bold-font">$ {props.price}</div>
        <div className="mb-0 description regular-font">{props.description}</div>
      </div>
    </Link>
  )
}

export default CardPackage