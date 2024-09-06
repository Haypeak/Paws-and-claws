import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format, addMinutes } from 'date-fns';

const EditAppointment = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: '',
    notes: '',
    status: '',
    appointmentType: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch appointment details and set form data
    const fetchAppointmentDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/appointments/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const appointmentData = await response.json();
          const [date, time] = appointmentData.date_time.split(' ');
          setFormData({
            date: date,
            time: time,
            reason: appointmentData.reason,
            status: appointmentData.status,
            appointmentType: appointmentData.appointmentType,
            notes: appointmentData.notes
          });
        } else {
          console.error('Failed to fetch appointment details');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAppointmentDetails();
  }, [id]);

  const fetchAppointmentDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/appointments/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        const appointmentData = await response.json();
        const [date, time] = appointmentData.date_time.split(' ');
        setFormData({
          date: date,
          time: time,
          reason: appointmentData.reason,
          // Add other fields as necessary
        });
      } else {
        console.error('Failed to fetch appointment details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/appointments/${id}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/appointments');
      } else {
        // Handle error
        console.error('Failed to update appointment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const now = new Date();
  const minDate = format(now, 'yyyy-MM-dd');
  const minTime = format(addMinutes(now, 1), 'HH:mm');

  return (
    <form onSubmit={handleSubmit}>
      {/* Add form fields similar to your AppointmentForm component */}
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        min={minDate}
        required
      />
      <input
        type="time"
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        min={minTime}
        required
      />
      <button type="submit">Update Appointment</button>
    </form>
  );
};

export default EditAppointment;
