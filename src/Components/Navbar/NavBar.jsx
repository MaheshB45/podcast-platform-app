import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  return (
    <div className='NavBar'>
       <div className='gradient'></div>
        <NavLink to="/" className={currentPath == "/" ? "active" : ""} >
         Signup
        </NavLink>
        <NavLink to="/podcasts" className={currentPath == "/podcasts" ? "active" : ""}>
         Podcasts
        </NavLink>
        <NavLink to="/start-a-podcast" className={currentPath == "/start-a-podcast" ? "active" : ""}>
         Start A Podcast
        </NavLink>
        <NavLink to="/profile" className={currentPath == "/profile" ? "active" : ""}>
         Profile
        </NavLink>
    </div>
  )
}

export default NavBar