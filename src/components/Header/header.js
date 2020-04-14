import React from 'react';
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <div className="items_header">
        <nav>
          <Link to="/" replace>Home</Link>
          <Link to="/favorites" replace>Favoritos</Link>
        </nav>
      </div>
    </div>
  );
}
