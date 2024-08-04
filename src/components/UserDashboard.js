import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div>
            <h2>User Dashboard</h2>
            <Link to="/train-availability">Check Train Availability</Link>
            <br />
            <Link to="/book-seat">Book a Seat</Link>
            <br />
            <Link to="/booking-details">Get Booking Details</Link>
        </div>
    );
};

export default UserDashboard;
