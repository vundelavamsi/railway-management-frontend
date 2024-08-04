import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import TrainAvailability from "./components/TrainAvailability";
import BookSeat from "./components/BookSeat";
import BookingDetails from "./components/BookingDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/train-availability" element={<TrainAvailability />} />
        <Route path="/book-seat" element={<BookSeat />} />
        <Route path="/booking-details" element={<BookingDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
