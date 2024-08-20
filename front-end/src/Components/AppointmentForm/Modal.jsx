
import PropTypes from 'prop-types';
import './Model.css';

const Modal = ({ isOpen, onClose, onImageChange, onRemoveImage }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>My Profile</h3>
        <input
          type="file"
          onChange={onImageChange}
          accept="image/*"
          className="file-input"
        />
        <div className='model-button'>
        <button onClick={onRemoveImage} className="remove-button">Remove Image</button>
        <button onClick={onClose} className="close-button">Close</button>
        </div>
        
      </div>
    </div>
  );
};

// Add prop validation
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onRemoveImage: PropTypes.func.isRequired,
};

export default Modal;
