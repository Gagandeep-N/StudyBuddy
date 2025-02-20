import NavBar from "../NavBar/NavBar";
import "./LandingPage.css";
import FeatureCards from "../FeatureCards/FeatureCards";
import book from "../../assets/book.png";
import exam from "../../assets/exam.png";
import progress from "../../assets/progress.png";
import signUp from "../../assets/add-user.png";

export default function LandingPage() {
    return (
        <div className="container-landing">
            <header className="header">
                <NavBar />
            </header>

            <div className="main-content">
                <section className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">Take Notes, Create Tests, Excel in Your Studies</h1>
                        <p className="hero-text">StudySensei helps you organize your notes and create custom tests to boost your learning experience.</p>
                        <button className="get-started-btn">
                            Get Started
                        </button>
                    </div>
                </section>

                <section className="features-container">
                    <div className="feature-content">
                        <h1 className="features-title">Features</h1>
                        <div className="feature-grid">
                            <FeatureCards
                                logo={book}
                                title="Smart Note-Taking"
                                description="Organize and structure your notes with ease using our intuitive interface."
                            />
                            <FeatureCards
                                logo={exam}
                                title="Custom Test Creation"
                                description="Create personalized tests to reinforce your learning and track your progress."
                            />
                            <FeatureCards
                                logo={progress}
                                title="Progress Tracking"
                                description="Monitor your study progress and identify areas for improvement."
                            />
                        </div>
                    </div>
                </section>

                <section className="about-container">
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
                            <button className="get-started-now-btn">
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="footer">
                <p className="copyright">© 2025 StudySensei. All rights reserved.</p>
                <div className="footer-nav">
                    <a className="footer-link">
                        Terms of Service
                    </a>
                    <a className="footer-link">
                        Privacy
                    </a>
                </div>
            </footer>
        </div>
    );
}