import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="py-4 border-b">
    <div className="navbar-container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="search" className='w-[200px] -ml-12'/>
        </Link>
      </div>
      <div className="auth-buttons">
        <button className="btn btn-primary">sign in</button>
        <button className="btn btn-outline">sign up</button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
