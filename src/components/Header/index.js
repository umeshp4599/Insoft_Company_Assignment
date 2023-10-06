// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        src="https://schoolaura.com/Content/assets/images/logo_school.png"
        className="logo"
      />
      {/* <h1 className="title">Wave</h1> */}
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/about">
          Exam Solution
        </Link>
      </li>
      <li>
        <Link className="route-link" to="/about">
          Online Study
        </Link>
      </li>
      <li>
        <Link className="route-link" to="/about">
          Tutor solution
        </Link>
      </li>
      <li>
        <Link className="route-link" to="/about">
          Blogs
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          Contact Us
        </Link>
      </li>
      <li>
        <Link className="route-link" to="/about">
          School Management
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
