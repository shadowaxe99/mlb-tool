
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlayerPerformance = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                '/api/player_performance',
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Player Performance</h2>
            {data.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.performance}</p>
                </div>
            ))}
        </div>
    );
}

export default PlayerPerformance;
