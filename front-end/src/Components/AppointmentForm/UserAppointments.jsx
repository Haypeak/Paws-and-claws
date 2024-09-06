import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user's appointments
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    // Implement logic to fetch user's appointments from the backend
  };

  const handleCancel = async (appointmentId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/appointments/${appointmentId}/cancel`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Include authorization header if needed
        },
      });

      if (response.ok) {
        // Remove the cancelled appointment from the state
        setAppointments(appointments.filter(app => app.id !== appointmentId));
      } else {
        // Handle error
        console.error('Failed to cancel appointment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = (appointmentId) => {
    navigate(`/edit-appointment/${appointmentId}`);
  };

  return (
    <div>
      <h2>My Appointments</h2>
      {appointments.map(appointment => (
        <div key={appointment.id}>
          <p>Date: {appointment.date}</p>
          <p>Time: {appointment.time}</p>
          <p>Reason: {appointment.reason}</p>
          <button onClick={() => handleCancel(appointment.id)}>Cancel</button>
          <button onClick={() => handleEdit(appointment.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default UserAppointments;
