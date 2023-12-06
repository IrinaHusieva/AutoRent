import React from 'react';
import css from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div className={css.title}>
          <h1 className={css.h}>Auto Rent</h1>
        </div>
        <div className='navdiv'>
          <Link to="/" className={css.navItem}>
            Home
          </Link>
          <Link to="/catalog" className={css.navItem}>
            Catalog
          </Link>
          <Link to="/favorites" className={css.navItem}>
            Favorites
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
