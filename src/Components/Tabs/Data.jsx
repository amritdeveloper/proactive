import React, { useState, useEffect } from 'react';
import "./Data.css"

function DataTab() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Number of items per page
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        // Fetch data from the server when component mounts or when currentPage changes
        fetchData();
    }, [currentPage]);

    const fetchData = () => {
        // Make an API request to your PHP script to fetch data
        fetch(`http://your-server-url/getData.php?page=${currentPage}&itemsPerPage=${itemsPerPage}`)
            .then(response => response.json())
            .then(data => {
                setData(data.items);
                setTotalPages(data.totalPages);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h2>Data Tab</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            {/* Render additional data fields here */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                {/* Pagination buttons */}
                {Array.from(Array(totalPages).keys()).map(page => (
                    <button key={page} onClick={() => handlePaginationClick(page + 1)}>
                        {page + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default DataTab;
