import book from '../../assets/book.png'
import "./NavBar.css";
export default function NavBar() {
    return (
        <div className="nav-container">
            <div className="logo-brand">
                <img src={book} className='logo-book'/>
                <h3 className='app-name'>StudySensei</h3>
            </div>
            <div className="nav-options">
                <button className="features">Features</button>
                <button className='about'>About</button>
                <button className='login'>Login</button>
            </div>
        </div>
    );
}