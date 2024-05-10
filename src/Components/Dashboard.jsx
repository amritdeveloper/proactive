import React from 'react';
import './Dashboard.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const DashboardWithTab = (TabComponent) => {
    return function DashboardWithComponent(props) {
        return (
            <div className="dashboard">
                <header className="header">
                    <h1>Dashboard</h1>
                    <div className="auth-links">
                    <Link to="/login">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </Link>
                    <Link to="/register">
                        <i className="fas fa-user-plus"></i> Register
                    </Link>
                </div>
                </header>
                <div className="content">
                    <aside className="sidebar">
                        <nav>
                            <ul>
                                <li><Link to="/dashboard/home">Home</Link></li>
                                <li><Link to="/dashboard/data">Data</Link></li>
                                <li><Link to="/dashboard/quiz">Quiz</Link></li>
                                <li><Link to="/dashboard/add-delete-data">Add/Delete Data</Link></li>
                                <li><Link to="/dashboard/qa">Q&A</Link></li>
                                <li><Link to="/dashboard/profile">Profile</Link></li>
                            </ul>
                        </nav>
                    </aside>
                    <main className="main">
                        <TabComponent {...props} />
                    </main>
                </div>
                <footer className="footer">
                    <p>&copy; 2024 Dashboard App</p>
                </footer>
            </div>
        )
    }
}

export default DashboardWithTab;