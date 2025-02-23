import FeatureCards from "../FeatureCards/FeatureCards";
import signUp from "../../assets/add-user.png";
import book from "../../assets/book.png";
import exam from "../../assets/exam.png";
import "./Guide.css";
import { Link } from "react-router-dom";
export default function Guide() {
    return (
        <div className="about-content">
            <h1 className="about-title">How It Works</h1>
            <div className="about-grid">
                <FeatureCards
                    logo={signUp}
                    title="1. Sign Up"
                    description="Create your account and set up your profile to get started."
                />
                <FeatureCards
                    logo={book}
                    title="2. Take Notes"
                    description="Use our intuitive interface to organize and structure your study notes."
                />
                <FeatureCards
                    logo={exam}
                    title="3. Create Tests"
                    description="Generate custom tests from your notes to reinforce your learning."
                />
            </div>
            <div className="get-started-now-ctn">
                <Link className="get-started-now-btn" to="/login">
                    Get Started Now
                </Link>
            </div>
        </div>
    );
}