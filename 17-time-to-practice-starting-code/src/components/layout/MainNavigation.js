import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <NavLink to='/' className={classes.logo}>Some Quotes</NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>
              to All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              Add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
