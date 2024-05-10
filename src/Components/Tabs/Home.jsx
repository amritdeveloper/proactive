import React from 'react';
import './Home.css'; // Import CSS file for styling

function Home() {
    // Generate counts ranging from 0 to 10
    const counts = Array.from(Array(11).keys());

    return (
        <div className="home-tab">
            <h2>Home</h2>
            <div className="count-boxes">
                {counts.map(count => (
                    <div key={count} className="count-box">
                        <span>{count}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home
