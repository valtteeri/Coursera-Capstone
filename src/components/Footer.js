import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'

function Footer(){
    return(
        <footer className="footer">
            <img src={logo} alt="logo" />
            <ul>
                <li><Link to='/'><a href="#">Home</a></Link></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <ul>
                <li><a href="#">Address</a></li>
                <li><a href="#">Phone Number</a></li>
                <li><a href="#">Email</a></li>
            </ul>
            <ul>
                <li><a href="#">Social Media</a></li>
            </ul>
        </footer>
    )
}

export default Footer;