import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className="bg-gray-800 py-5">
    <div className="container mx-auto">
      <nav className="text-white">
        <ul className="flex">
          <li className="mr-6">
            <Link className="" to="/">Home</Link>
          </li>
          <li className="mr-6">
            <Link className="" to="/news">News</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>;
};

export default Header;
