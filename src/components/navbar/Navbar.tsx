import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import "./navbar.css";

const Navbar = () => {
  const [toggleMobile, setToggleMobile] = useState(false);

  const handleMenu = () => {
    setToggleMobile(!toggleMobile);
  };

  return (
    <div className='navbar'>
      <div className='logoContainer'>
        <h1 className='logo'>logo</h1>
      </div>
      <ul className='navbarItems'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/blog'>Blogs</a>
        </li>
        <li>
          <a href=''>Youtube</a>
        </li>
        <li>
          <a href=''>Shop</a>
        </li>
      </ul>
      <div className='mobileMenu'>
        {toggleMobile ? (
          <button type='button' onClick={handleMenu}>
            <FaXmark size={24} />
          </button>
        ) : (
          <button type='button' onClick={handleMenu}>
            <FaBars size={24} />
          </button>
        )}
        {toggleMobile && (
          <div className='mobileMenuList'>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/contact'>contact</a>
              </li>
              <li>
                <a href='/about'>about</a>
              </li>
              <li>
                <a href=''>youtube</a>
              </li>
              <li>
                <a href=''>shop</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
