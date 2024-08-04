import React, { useState } from 'react';
import axios from 'axios';

const BookSeat = () => {
    const [trainId, setTrainId] = useState('');
    const [noOfSeats, setNoOfSeats] = useState('');
    const [message, setMessage] = useState('');

    const handleBookSeat = async () => {
        try {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('user_id');
            const response = await axios.post('https://railway-management-backend.onrender.com/api/book-seat', {
                user_id: userId,
                train_id: trainId,
                no_of_seats: noOfSeats
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Book a Seat</h2>
            <input type="text" placeholder="Train ID" value={trainId} onChange={e => setTrainId(e.target.value)} />
            <input type="number" placeholder="Number of Seats" value={noOfSeats} onChange={e => setNoOfSeats(e.target.value)} />
            <button onClick={handleBookSeat}>Book Seat</button>
            <p>{message}</p>
        </div>
    );
};

export default BookSeat;
