import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function NavBar() {
  return (
    <nav>
      <ul className="ulclass">
        <li className="liclass">
          <Link to="/">TVShows</Link>
        </li>
        <li className="liclass">
          <Link to="/favourite">Favourite shows</Link>
        </li>
      </ul>
    </nav>
  );
}
