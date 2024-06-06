import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function Header({ showLinks, setShowLinks }) {
  return (
    <div>
      <header>
        <Link to='/' className='logo'>My Blog</Link>
        <nav>
          {showLinks && (
            <>
              <Link to='/Login'>Login</Link>
              <Link to='/Register'>Register</Link>
            </>
          )}
          <button onClick={() => setShowLinks(!showLinks)}>
            {showLinks ? 'Hide Links' : 'Show Links'}
          </button>
        </nav>
      </header>
    </div>
  );
}
