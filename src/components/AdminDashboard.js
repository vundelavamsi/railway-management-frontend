import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [trainName, setTrainName] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [seatCapacity, setSeatCapacity] = useState('');
    const [arrivalTimeAtSource, setArrivalTimeAtSource] = useState('');
    const [arrivalTimeAtDestination, setArrivalTimeAtDestination] = useState('');
    const [message, setMessage] = useState('');

    const handleAddTrain = async () => {
        try {
            const response = await axios.post('https://railway-management-backend.onrender.com/api/add-train', {
                train_name: trainName,
                source,
                destination,
                seat_capacity: seatCapacity,
                arrival_time_at_source: arrivalTimeAtSource,
                arrival_time_at_destination: arrivalTimeAtDestination
            }, {
                headers: { 'x-api-key': 'your_admin_api_key' }
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <input type="text" placeholder="Train Name" value={trainName} onChange={e => setTrainName(e.target.value)} />
            <input type="text" placeholder="Source" value={source} onChange={e => setSource(e.target.value)} />
            <input type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
            <input type="number" placeholder="Seat Capacity" value={seatCapacity} onChange={e => setSeatCapacity(e.target.value)} />
            <input type="time" placeholder="Arrival Time at Source" value={arrivalTimeAtSource} onChange={e => setArrivalTimeAtSource(e.target.value)} />
            <input type="time" placeholder="Arrival Time at Destination" value={arrivalTimeAtDestination} onChange={e => setArrivalTimeAtDestination(e.target.value)} />
            <button onClick={handleAddTrain}>Add Train</button>
            <p>{message}</p>
        </div>
    );
};

export default AdminDashboard;
