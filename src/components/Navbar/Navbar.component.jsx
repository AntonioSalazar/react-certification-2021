import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHamburger,
  FaWindowClose,
  FaHome,
  FaUserNinja,
  FaSun,
  FaRegMoon,
} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Navbar.styles.scss';
import { InputText } from './styledComponents';
import { VideoListContext } from '../../providers/VideoList/VideoList.provider';
import Context from '../../providers/Theme/Theme.provider';
import { useHistory } from 'react-router-dom';

// ##### Im thinking about refactoring this component into another component as I think it's kind of complex to read ####

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const toogleSideBar = () => setSidebar(!sidebar);
  const { setSearch } = useContext(VideoListContext);
  const { dispatch } = useContext(Context);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue);
    setInputValue('');
    history.push('/');
  };

  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_DARK_MODE',
    });
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '3rem' }}>
        <nav className="navbar">
          <div className="navbar__left-section">
            <div className="menu-bars">
              <FaHamburger onClick={toogleSideBar} />
            </div>
            <form onSubmit={handleSubmit}>
              <InputText
                type="text"
                name="search"
                placeholder="search a video..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </form>
          </div>

          <div className="navbar__right-section">
            <div className="toggle">
              <FaRegMoon size={20} />
              <label className="switch">
                <input type="checkbox" onClick={handleClick} />
                <span className="slider round"></span>
              </label>
              <FaSun size={20} />
            </div>
            <Link to="/">
              <FaUserNinja />
            </Link>
          </div>
        </nav>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={toogleSideBar}>
            <li
              className="navbar-toggle"
              style={{ cursor: 'pointer', marginLeft: '2rem' }}
            >
              <FaWindowClose />
            </li>
            <li className="nav-text">
              <Link to="/">
                <FaHome />
                <span style={{ color: '#fff' }}>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
