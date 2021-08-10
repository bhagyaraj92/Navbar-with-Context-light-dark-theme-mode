import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const navImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navBgColorClassName = isDarkTheme ? 'nav-bg-dark' : 'nav-bg-light'

      const navLogoImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const listItemsBgClassName = isDarkTheme
        ? 'list-dark-theme'
        : 'list-light-theme'

      return (
        <div className={`nav ${navBgColorClassName}`}>
          <div className="nav-container">
            <img
              src={navLogoImgUrl}
              alt="logo"
              className="nav-logo"
              alt="website logo"
            />
            <ul className="nav-un-list">
              <li className="link-list">
                <Link className={`link ${listItemsBgClassName}`} to="/">
                  Home
                </Link>
              </li>
              <li className="link-list">
                <Link className={`link ${listItemsBgClassName}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <button
              testid="theme"
              type="button"
              className="nav-button"
              onClick={onToggleTheme}
            >
              <img src={navImageUrl} alt="theme" className="img-edit" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
