import React, { useState, useEffect } from 'react';
import "./Quiz.css"

function QuizTab() {
    const [questions, setQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [answers, setAnswers] = useState({});
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        // Fetch quiz questions from the server when component mounts or when currentPage changes
        fetchQuestions();
    }, [currentPage]);

    const fetchQuestions = () => {
        // Make an API request to your PHP script to fetch quiz questions
        fetch(`http://your-server-url/getQuizQuestions.php?page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                setQuestions(data.questions);
                setTotalPages(data.totalPages);
            })
            .catch(error => console.error('Error fetching questions:', error));
    };

    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };

    const handleAnswerSelect = (questionId, selectedAnswer) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: selectedAnswer
        }));
    };

    const handleSubmitQuiz = () => {
        // Make an API request to your PHP script to store user answers
        fetch('http://your-server-url/storeQuizAnswers.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(answers)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Quiz answers stored successfully:', data);
            // Optionally, you can perform additional actions after storing answers
        })
        .catch(error => console.error('Error storing quiz answers:', error));
    };

    return (
        <div>
            <h2>Quiz Tab</h2>
            {questions.map(question => (
                <div key={question.id}>
                    <h3>{question.text}</h3>
                    <ul>
                        {question.options.map(option => (
                            <li key={option.id}>
                                <label>
                                    <input
                                        type="radio"
                                        name={`question_${question.id}`}
                                        value={option.id}
                                        onChange={() => handleAnswerSelect(question.id, option.id)}
                                    />
                                    {option.text}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <div className="pagination">
                {Array.from(Array(totalPages).keys()).map(page => (
                    <button
                        key={page}
                        onClick={() => handlePaginationClick(page + 1)}
                        className={currentPage === page + 1 ? 'active' : ''}
                    >
                        {page + 1}
                    </button>
                ))}
            </div>
            <button onClick={handleSubmitQuiz}>Submit Quiz</button>
        </div>
    );
}

export default QuizTab;
