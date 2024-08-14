import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentForm.css';
import plus from '../../assets/icons8-plus-24.png';
import pencil from '../../assets/icons8-pencil-48.png';

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [editingProfileId, setEditingProfileId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem('userProfiles'));
    if (storedProfiles) {
      setProfiles(storedProfiles);
    }
  }, []);

  const handleAddAccount = () => {
    navigate('/signup'); // Navigate to the sign-up page
  };

  const handleImageChange = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      const newProfiles = profiles.map(profile => {
        if (profile.name === id) {
          return { ...profile, image: URL.createObjectURL(file) };
        }
        return profile;
      });
      setProfiles(newProfiles);
      setEditingProfileId(null);
      localStorage.setItem('userProfiles', JSON.stringify(newProfiles)); // Save updated profiles
    }
  };

  const handleRemoveImage = (id) => {
    const newProfiles = profiles.map(profile => {
      if (profile.name === id) {
        return { ...profile, image: null };
      }
      return profile;
    });
    setProfiles(newProfiles);
    setEditingProfileId(null);
    localStorage.setItem('userProfiles', JSON.stringify(newProfiles)); // Save updated profiles
  };

  return (
    <div className='profileContainer'>
      {profiles.map(profile => (
        <div key={profile.name} className='profile-item'>
          <div className='profile-image-container-main'>
            {editingProfileId === profile.name ? (
              <div className='edit-options'>
                <input
                  className='profile-image-container'
                  type="file"
                  onChange={(event) => handleImageChange(profile.name, event)}
                  accept="image/*"
                  style={{ display: 'block', marginBottom: '10px'}}
                />
                <div className='profile-button-container'>
                  <button onClick={() => handleRemoveImage(profile.name)} className='remove-button'>Remove</button>
                  <button onClick={() => setEditingProfileId(null)} className='cancel-button'>Cancel</button>
                </div>
              </div>
            ) : (
              <div className="profile-image-wrapper">
                <img
                  src={profile.image || 'default-profile.png'}
                  alt="Profile"
                  className='profile-image'
                />
                <img 
                  src={pencil} 
                  alt='edit image' 
                  className='edit-icon'
                  onClick={() => setEditingProfileId(profile.name)} 
                />
              </div>
            )}
          </div>
          <div style={{lineHeight:'4px', marginTop:'20px'}}>
          <h3 className='profile-name'>{profile.name}</h3>
          <p className='profile-email'>{profile.email}</p>
          </div>
        </div>
      ))}
      <button onClick={handleAddAccount} className='account-button'>
        <img src={plus} alt='add' style={{ width: '20px', height: '20px' }} />
        Add Account
      </button>
    </div>
  );
};

export default Profile;
