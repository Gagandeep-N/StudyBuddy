import "./PopUp.css";
export default function PopUp() {

    return (
        <div className="popup-overlay">
            <div className="card">
                <h4 className="popup-message">
                    "Oops! We couldn't find an account with that email.
                    If you're new to StudySensei, please sign up to get started!"
                </h4>

                <button className="sign-up-button">
                    Sign Up
                </button>
            </div>
        </div>
    );
}