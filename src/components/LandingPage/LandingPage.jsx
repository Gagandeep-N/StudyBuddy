import NavBar from "../NavBar/NavBar";
import "./LandingPage.css";
import Features from "../Features/Features";
import Guide from "../Guide/Guide";

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

                <section id="features" className="features-container">
                    <Features />
                </section>

                <section id="guide" className="about-container">
                    <Guide />
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