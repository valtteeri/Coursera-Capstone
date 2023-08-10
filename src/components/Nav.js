import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'

function Nav(){
    return(
        <nav className="nav">
            <img src={logo} alt="logo" />
            <ul>
                <li>
                    <Link to='/'><a href="#">Home</a></Link>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Reservations</a>
                </li>
                <li>
                    <a href="#">Order Online</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;