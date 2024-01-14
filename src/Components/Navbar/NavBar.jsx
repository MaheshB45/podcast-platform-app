import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
       <div className='gradient'></div>
        <NavLink to={"/"}>Signup</NavLink>
        <NavLink to={"/podcasts"}>Podcasts</NavLink>
        <NavLink to={"/startApodcast"}>Start A Podcast</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
    </div>
  )
}

export default NavBar