import React, { useState } from 'react';
import axios from 'axios';

const BookingDetails = () => {
    const [bookingId, setBookingId] = useState('');
    const [bookingDetails, setBookingDetails] = useState(null);

    const handleGetBookingDetails = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`https://railway-management-backend.onrender.com/api/booking-details?booking_id=${bookingId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setBookingDetails(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Get Booking Details</h2>
            <input type="text" placeholder="Booking ID" value={bookingId} onChange={e => setBookingId(e.target.value)} />
            <button onClick={handleGetBookingDetails}>Get Details</button>
            {bookingDetails && (
                <div>
                    <p>Booking ID: {bookingDetails.booking_id}</p>
                    <p>Train ID: {bookingDetails.train_id}</p>
                    <p>Number of Seats: {bookingDetails.no_of_seats}</p>
                    <p>Seat Numbers: {bookingDetails.seat_numbers}</p>
                    <p>Arrival Time at Source: {bookingDetails.arrival_time_at_source}</p>
                    <p>Arrival Time at Destination: {bookingDetails.arrival_time_at_destination}</p>
                </div>
            )}
        </div>
    );
};

export default BookingDetails;
