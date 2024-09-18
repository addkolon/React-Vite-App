import React from "react";
import "./Modal.css";

export default function Modal({ show, onClose, availableSeats, bookedSeats }) {
  if (!show) {
    return null;
  }

  // Combine available and booked seats and sort them in order
  const allSeats = [...availableSeats, ...bookedSeats].sort((a, b) => {
    // Sort by row (A, B, etc.) and then by number
    const rowA = a.charAt(0);
    const rowB = b.charAt(0);
    const numA = parseInt(a.slice(1), 10);
    const numB = parseInt(b.slice(1), 10);

    if (rowA === rowB) {
      return numA - numB; // Sort by seat number if rows are the same
    }

    return rowA.localeCompare(rowB); // Sort by row (A, B, C...)
  });

  // Function to determine if a seat is booked
  const isSeatBooked = (seat) => bookedSeats.includes(seat);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select your seats</h2>
        <div className="screen"></div>
        <div className="seat-map">
          {allSeats.map((seat) => (
            <div className="seat"
              key={seat}
            >
              <div className={`${isSeatBooked(seat) ? "booked" : "available"}`}>{seat}</div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary-outlined" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}