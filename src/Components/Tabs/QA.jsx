import React from 'react';
import './QA.css'; // Import CSS file for styling


function QATab() {
    return (
        <div className="qa-tab">
            <h2>Q&A Tab</h2>
            <div className="accordion">
                <div className="question">
                    <button className="accordion-btn">Question 1</button>
                    <div className="answer">
                        Answer 1
                    </div>
                </div>
                <div className="question">
                    <button className="accordion-btn">Question 2</button>
                    <div className="answer">
                        Answer 2
                    </div>
                </div>
                {/* Add more questions and answers here */}
            </div>
        </div>
    );
}

export default QATab;

