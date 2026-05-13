import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <h1>TalentCircle</h1>
                <p>Talent Ingestion</p>
            </div>

            <nav>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/" className={styles.menuItem}>
                            <i className="bi bi-database"></i>
                            <span>Data Collection</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/review-panel" className={styles.menuItem}>
                            <i className="bi bi-card-text"></i>
                            <span>Review Panel</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/publication" className={styles.menuItem}>
                            <i className="bi bi-send"></i>
                            <span>Publication</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/configuration" className={styles.menuItem}>
                            <i className="bi bi-gear"></i>
                            <span>Configuration</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}