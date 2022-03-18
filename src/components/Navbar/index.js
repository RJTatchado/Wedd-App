import React from 'react';
import './style.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <button type="button">
            <span class="material-icons-round">
              home
            </span>
          </button>
        </li>
        <li>
          <button type="button">
            <span class="material-icons-round">
              favorite
            </span>
          </button>
        </li>
        <li>
          <button type="button">
            <span class="material-icons-round">
              image
            </span>
          </button>
        </li>
        <li>
          <button type="button">
            <span class="material-icons-round">
              place
            </span>
          </button>
        </li>
        <li>
          <button type="button">
            <span class="material-icons-round">
              email
            </span>
          </button>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;