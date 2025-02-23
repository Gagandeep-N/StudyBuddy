import book from "../../assets/book.png";
import "./DashboardNav.css";

export default function DashboardNav({
    profile,
    setTitle,
}) {

    const handleNotes = () => {
        setTitle("My Notes");
    }

    const handleTests = () => {
        setTitle("My Tests");
    }

    return (
        <div className="dashboard-nav">
            <div className="logo-brand">
                <img src={book} className='logo-book' />
                <h3 className='app-name'>StudySensei</h3>
            </div>

            <div className="options-buttons">
                <button
                    className="notes-btn"
                    onClick={handleNotes}
                >
                    Notes
                </button>
                <button
                    className="test-btn"
                    onClick={handleTests}
                >
                    Tests
                </button>

            </div>

            <div className="profile-logout">
                <h3 className="profile-name">
                    {profile}
                </h3>
                <button className="logout-btn">
                    Logout
                </button>
            </div>
        </div>
    )
}