import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';
import { AuthContext } from '../Auth/AuthContext';
import defaultProfilePic from '../../assets/profile.png';
import AppointmentModal from './AppointmentModal';

const UserProfile = () => {
  const { authState, logout, updateUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const appointmentsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!authState.isAuthenticated) {
        navigate('/login');
        return;
      }

      try {
        await fetchUserProfile(authState.token);
        await fetchUserAppointments(authState.token);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch user data');
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [authState.isAuthenticated, authState.token, navigate]);

  const fetchUserProfile = async (token) => {
    const response = await fetch('http://127.0.0.1:5000/auth/current_user', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    setUserData(data);
  };

  const fetchUserAppointments = async (token) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/appointments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.message || 'Failed to fetch appointments');
      }

      const data = await response.json();
      console.log('Fetched appointments:', data);
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setError(error.message || 'Failed to fetch appointments. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      logout();
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setProfilePicture(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const updatedUserData = {
      ...userData,
      profilePicture: profilePicture || userData.profilePicture
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/auth/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        },
        body: JSON.stringify(updatedUserData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update profile');
      }

      const updatedData = await response.json();
      setUserData(updatedData);
      setIsEditing(false);
      setProfilePicture(null); // Reset the profile picture state
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error.message || 'Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setProfilePicture(null); // Reset the profile picture state
  };

  const handleEditAppointment = (appointment) => {
    navigate(`/edit-appointment/${appointment.id}`, { state: { appointment } });
    setSelectedAppointment(null);
  };

  const handleCancelAppointment = async (appointmentId) => {
    const token = authState.token;
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:5000/api/appointments/${appointmentId}/cancel`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to cancel appointment');
      }

      const updatedAppointment = await response.json();
      setAppointments(appointments.map(app => 
        app.id === appointmentId ? { ...app, status: 'cancelled' } : app
      ));
      setSelectedAppointment(updatedAppointment);
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  };

  const handleUndoCancel = async (appointmentId) => {
    const token = authState.token;
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:5000/api/appointments/${appointmentId}/undo-cancel`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to undo cancellation');
      }

      const updatedAppointment = await response.json();
      setAppointments(appointments.map(app => 
        app.id === appointmentId ? { ...app, status: 'scheduled' } : app
      ));
      setSelectedAppointment(updatedAppointment);
    } catch (error) {
      console.error('Error undoing cancellation:', error);
    }
  };

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCloseModal = () => {
    setSelectedAppointment(null);
  };

  const formatDate = (dateTimeString) => {
    const [datePart, timePart] = dateTimeString.split(' ');
    const [year, month, day] = datePart.split('-');
    const date = new Date(year, month - 1, day);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (dateTimeString) => {
    const [, timePart] = dateTimeString.split(' ');
    const [hours, minutes] = timePart.split(':');
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    const options = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString(undefined, options);
  };

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);
  const totalPages = Math.ceil(appointments.length / appointmentsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="main-content">
      <div className="user-profile">
        <div className="user-profile-inner">
          <h2>User Profile</h2>
          {error && <p className="error-message">{error}</p>}
          {!isEditing ? (
            <>
              <div className="profile-info">
                <img 
                  src={userData.profilePicture ? `data:image/jpeg;base64,${userData.profilePicture}` : defaultProfilePic} 
                  alt="Profile" 
                  className="profile-picture"
                />
                <p><strong>Name:</strong> {userData.first_name} {userData.last_name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone_number}</p>
                <button onClick={handleEditProfile} className="small-button edit">Edit Profile</button>
              </div>
              
              <h3>Your Appointments</h3>
              {appointments.length > 0 ? (
                <>
                  {currentAppointments.map((appointment) => (
                    <div 
                      key={appointment.id} 
                      className={`appointment-item ${appointment.status === 'cancelled' ? 'cancelled' : ''}`}
                      onClick={() => handleAppointmentClick(appointment)}
                    >
                      <p>Date: {formatDate(appointment.date_time)}</p>
                      <p>Time: {formatTime(appointment.date_time)}</p>
                      <p>Reason: {appointment.reason}</p>
                      <p>Status: {appointment.status}</p>
                    </div>
                  ))}
                  {totalPages > 1 && (
                    <div className="pagination">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <a
                          key={number}
                          onClick={() => paginate(number)}
                          className={currentPage === number ? 'active' : ''}
                          href="#"
                        >
                          {number}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <p className="no-appointments-message">You currently have no appointments scheduled.</p>
              )}
            </>
          ) : (
            <form onSubmit={handleSaveProfile}>
              <div className="profile-picture-upload">
                <img 
                  src={profilePicture ? `data:image/jpeg;base64,${profilePicture}` : (userData.profilePicture ? `data:image/jpeg;base64,${userData.profilePicture}` : defaultProfilePic)} 
                  alt="Profile" 
                  className="profile-picture"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  id="profile-picture-input"
                />
                <label htmlFor="profile-picture-input" className="profile-picture-label">
                  Change Picture
                </label>
              </div>
              <input
                type="text"
                value={userData.first_name || ''}
                onChange={(e) => setUserData({ ...userData, first_name: e.target.value })}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                value={userData.last_name || ''}
                onChange={(e) => setUserData({ ...userData, last_name: e.target.value })}
                placeholder="Last Name"
                required
              />
              <input
                type="email"
                value={userData.email || ''}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                placeholder="Email"
                required
              />
              <input
                type="tel"
                value={userData.phone_number || ''}
                onChange={(e) => setUserData({ ...userData, phone_number: e.target.value })}
                placeholder="Phone Number"
                required
              />
              <div className="form-actions">
                <button type="submit" className="small-button save" disabled={isLoading}>
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
                <button type="button" onClick={handleCancelEdit} className="small-button cancel">Cancel</button>
              </div>
            </form>
          )}
        </div>
      </div>
      
      <AppointmentModal 
        appointment={selectedAppointment} 
        onClose={handleCloseModal} 
        onEdit={handleEditAppointment} 
        onCancel={handleCancelAppointment} 
        onUndoCancel={handleUndoCancel} 
      />
    </div>
  );
};

export default UserProfile;
