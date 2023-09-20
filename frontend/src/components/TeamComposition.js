
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamComposition = () => {
    const [teamComposition, setTeamComposition] = useState([]);

    useEffect(() => {
        const fetchTeamComposition = async () => {
            const response = await axios.get('/api/team_composition');
            setTeamComposition(response.data);
        };

        fetchTeamComposition();
    }, []);

    return (
        <div>
            <h2>Optimal Team Composition</h2>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {teamComposition.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeamComposition;
