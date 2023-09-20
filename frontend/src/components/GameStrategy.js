
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameStrategy = () => {
    const [strategy, setStrategy] = useState([]);

    useEffect(() => {
        const fetchStrategy = async () => {
            const response = await axios.get('/api/strategy');
            setStrategy(response.data);
        };

        fetchStrategy();
    }, []);

    return (
        <div>
            <h2>Game Strategy Recommendations</h2>
            {strategy.map((strat, index) => (
                <div key={index}>
                    <h3>{strat.title}</h3>
                    <p>{strat.description}</p>
                </div>
            ))}
        </div>
    );
};

export default GameStrategy;
