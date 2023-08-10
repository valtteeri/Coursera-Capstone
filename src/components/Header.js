import { Link } from 'react-router-dom';
import HeroImg from '../images/hero.jpg';

function Header(){
    return(
        <>
            <div className="hero-background">
                <div className="hero-container">
                    <div>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <a>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</a>
                        <div>
                            <Link to='/booking'><button>Reserve a Table</button></Link>
                        </div>
                    </div>
                    <img src={HeroImg} alt="logo" />
                </div>
            </div>
        </>
    )
}

export default Header;