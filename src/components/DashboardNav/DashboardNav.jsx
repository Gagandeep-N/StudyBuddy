import { useSelector } from "react-redux";
import book from "../../assets/book.png";
import "./DashboardNav.css";

export default function DashboardNav() {

    const userMail = useSelector((state) => state.user);  // TODO: need to integrate redux in profile
    return (
        <div className="dashboard-nav">
            <div className="logo-brand">
                <img src={book} className='logo-book' />
                <h3 className='app-name'>StudySensei</h3>
            </div>

            <div className="options-buttons">
                <button className="notes-btn">
                    Notes
                </button>
                <button className="test-btn">
                    Tests
                </button>

            </div>

            <div className="profile-logout">
                <h3 className="profile-name">
                    Profile
                </h3>
                <button className="logout-btn">
                    Logout
                </button>
            </div>
        </div>
    )
}