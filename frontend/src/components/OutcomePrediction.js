
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OutcomePrediction = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:5000/api/predictions',
            );
            setData(result.data);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h2>Outcome Predictions</h2>
                    {data.map(item => (
                        <div key={item.id}>
                            <h3>{item.team}</h3>
                            <p>Win Probability: {item.win_probability}%</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OutcomePrediction;
