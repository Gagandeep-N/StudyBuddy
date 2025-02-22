import FeatureCards from "../FeatureCards/FeatureCards";
import book from "../../assets/book.png";
import exam from "../../assets/exam.png";
import progress from "../../assets/progress.png";
import "./Features.css";

export default function Features() {
    return (
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
    );
}