import {useState} from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo';


function NavBar(){
  const [nav, setNav] = useState(false);
  const changeBackground = () =>{
    return window.scrollY>= 50 ? setNav(true) : setNav(false);
    }
  window.addEventListener('scroll' , changeBackground);
  return (
    <nav className={nav ? "nav active": "nav"}>
      
     <Link to="#" className='logo'>
      <Logo/>
     </Link>
     <input type="checkbox" name="" id="menu-btn" className='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='nav-icon'> </span>
      </label>

      <ul className='menu'>
        <li><Link to='main' smooth ={true} duration={1000}>Header</Link></li>
        <li><Link to='features' smooth ={true} duration={1000}>Features</Link></li>
        <li><Link to='about' smooth ={true} duration={1000}>About</Link></li>
        <li><Link to='contact' smooth ={true} duration={1000}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar