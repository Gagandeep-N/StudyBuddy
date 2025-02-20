import "./FeatureCards.css";

export default function FeatureCards({
    logo,
    title,
    description
}) {
    return (
        <div className="feature-card">
            <img src={logo} className="logo"/>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
        </div>
    );
}