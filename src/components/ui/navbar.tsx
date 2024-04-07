import React from "react";
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the arrow-left icon

interface NavbarProps {
  title: string;
  backURL?: string;
}

function Navbar(props: NavbarProps) {
  const { title, backURL } = props;
  const location = useLocation();

  const showBackButton = backURL && location.pathname !== '/';

  return (
    <nav className="main_nav">
      {showBackButton && (
        <Link to={backURL} className="linkTo">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      )}
      
      <h1 className="mb-0">{title}</h1>
    </nav>
  );
}

export default Navbar;
