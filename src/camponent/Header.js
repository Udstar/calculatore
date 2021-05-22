import React from 'react';
import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/About">About</Link>
  </li>
</ul>
        
    )
}
