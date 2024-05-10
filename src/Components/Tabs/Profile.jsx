import React, { useState } from 'react';
import './Home.css'; // Import CSS file for styling


function ProfilePage() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="profile-page">
            <h2>Profile Page</h2>
            <button onClick={togglePopup}>Edit Details</button>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Edit Details</h3>
                        {/* Form fields for editing details */}
                        <label>Name:</label>
                        <input type="text" />
                        <label>Email:</label>
                        <input type="email" />
                        <button onClick={togglePopup}>Save</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfilePage;

