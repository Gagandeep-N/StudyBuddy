import DashboardNav from "../DashboardNav/DashboardNav";
import { useSelector } from "react-redux";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import menu from "../../assets/menu.png";
import left from "../../assets/left.png";

export default function Dashboard() {

    const [title, setTitle] = useState("My Notes");
    const [isHidden, setIsHidden] = useState(window.innerWidth <= 768);
    const userMail = useSelector((state) => state.user);  // TODO: need to integrate redux in profile

    useEffect(() => {
        const handleResize = () => {
            setIsHidden(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMenuClick = () => {
        setIsHidden(!isHidden);
    }

    const handleLeftClick = () => {
        setIsHidden(true);
    }


    return (
        <div className="dashboard-container">
             <div className={`nav-container ${isHidden ? 'hidden' : ''}`}>
                <DashboardNav
                    profile="Profile"
                    setTitle={setTitle}
                />
                <img
                src={left}
                className="left-img"
                onClick={handleLeftClick}
                />
            </div>
            <div className="dashboard-content">
                <div className="dashboard-header">
                    <img
                        src={menu}
                        className="menu-img"
                        onClick={handleMenuClick}
                    />
                    <h1 className="dashboard-title">{title}</h1>
                </div>
                <div className="notes-test-cards"></div>
            </div>
        </div>
    );
}