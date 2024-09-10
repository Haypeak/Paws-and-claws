import React, { useEffect, useRef, useState } from 'react';
import './AppointmentModal.css';

const AppointmentModal = ({ appointment, onClose, onEdit, onCancel, onUndoCancel }) => {
  const modalRef = useRef(null);
  const [formattedDate, setFormattedDate] = useState('');
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    if (appointment) {
      const appointmentDate = new Date(appointment.date_time);
      setFormattedDate(appointmentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
      setFormattedTime(appointmentDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      }));
    }
  }, [appointment]);

  if (!appointment) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        <h2>Appointment Details</h2>
        <p><strong>Date:</strong> {formattedDate}</p>
        <p><strong>Time:</strong> {formattedTime}</p>
        <p><strong>Reason:</strong> {appointment.reason}</p>
        <p><strong>Notes:</strong> {appointment.notes}</p>
        <p><strong>Status:</strong> {appointment.status}</p>
        <div className="modal-actions">
          {appointment.status !== 'cancelled' && (
            <>
              <button className="edit-button" onClick={() => onEdit(appointment)}>Edit</button>
              <button className="cancel-button" onClick={() => onCancel(appointment.id)}>Cancel</button>
            </>
          )}
          {appointment.status === 'cancelled' && (
            <button className="undo-button" onClick={() => onUndoCancel(appointment.id)}>Undo</button>
          )}
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
