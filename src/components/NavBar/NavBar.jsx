import book from '../../assets/book.png'
import "./NavBar.css";
import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <div className="nav-container">
            <div className="logo-brand">
                <img src={book} className='logo-book' />
                <h3 className='app-name'>StudySensei</h3>
            </div>
            <div className="nav-options">
                <Link
                    className="features"
                    onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}
                >
                    Features
                </Link>
                <Link
                    className='about'
                    onClick={() => document.getElementById("guide").scrollIntoView({ behavior: "smooth" })}
                >
                    Guide
                </Link>
                <Link className='login' to="/login">Login</Link>
            </div>
        </div>
    );
}