import React, { useState } from 'react';
import axios from 'axios';

const TrainAvailability = () => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [trains, setTrains] = useState([]);

    const handleCheckAvailability = async () => {
        try {
            const response = await axios.get(`https://railway-management-backend.onrender.com/api/seat-availability?source=${source}&destination=${destination}`);
            setTrains(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Check Train Availability</h2>
            <input type="text" placeholder="Source" value={source} onChange={e => setSource(e.target.value)} />
            <input type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
            <button onClick={handleCheckAvailability}>Check Availability</button>
            <ul>
                {trains.map(train => (
                    <li key={train.train_id}>
                        {train.train_name} - Available Seats: {train.available_seats}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainAvailability;
