import PropTypes from 'prop-types';
import './Model.css';

const Modal = ({ isOpen, onClose, onImageChange, onRemoveImage, profile, getInitialAvatar }) => {
  // Check if the modal should be open and profile exists
  if (!isOpen || !profile) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>My Profile</h3>
        <div className="modal-image-container">
          <img
            src={profile.image || getInitialAvatar(profile.first_name)}
            alt="Profile" 
            className="modal-profile-image"
          />
        </div>
        <div className="profile-content-col">
        <p><strong>First Name:</strong> {profile.first_name}</p>
        <p><strong>Last Name:</strong> {profile.last_name}</p>
        <p><strong>Phone Number:</strong> {profile.phone_number}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        </div>
        
        <input
          type="file"
          onChange={onImageChange}
          accept="image/*"
          className="file-input"
        />
        <div className="modal-buttons">
          <button onClick={onRemoveImage} className="remove-button">Remove Image</button>
          <button onClick={onClose} className="close-button">Close</button>
        </div>
      </div>
    </div>
  );
};

// Prop validation
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onRemoveImage: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string,  
  }),
  getInitialAvatar: PropTypes.func.isRequired,  
};

export default Modal;
