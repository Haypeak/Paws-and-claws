import { useState, useEffect } from 'react';
import Modal from './Modal'; // Adjust the path if necessary
import './AppointmentForm.css';
import pencil from '../../assets/icons8-pencil-48.png';
import camera from '../../assets/icons8-camera-48.png';

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem('userProfiles'));
    if (storedProfiles) {
      setProfiles(storedProfiles);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && selectedProfile) {
      const newProfiles = profiles.map(profile => {
        if (profile.first_name + ' ' + profile.last_name === selectedProfile) {
          return { ...profile, image: URL.createObjectURL(file) };
        }
        return profile;
      });
      setProfiles(newProfiles);
      localStorage.setItem('userProfiles', JSON.stringify(newProfiles));
      setIsModalOpen(false);
    }
  };

  const handleRemoveImage = () => {
    if (selectedProfile) {
      const newProfiles = profiles.map(profile => {
        if (profile.first_name + ' ' + profile.last_name === selectedProfile) {
          return { ...profile, image: null };
        }
        return profile;
      });
      setProfiles(newProfiles);
      localStorage.setItem('userProfiles', JSON.stringify(newProfiles));
      setIsModalOpen(false);
    }
  };

  const openModal = (profileId) => {
    setSelectedProfile(profileId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
  };

  return (
    <div className='profileContainer'>
      {profiles.map(profile => (
        <div key={profile.first_name + ' ' + profile.last_name} className='profile-item'>
          <div className='profile-image-container-main'>
            <div className="profile-image-wrapper">
              <div className='profile-img-container'>
                <img
                  src={profile.image || 'default-profile.png'}
                  alt="Profile"
                  className='profile-image'
                />
                <div className='hovering-image'>
                  <img src={camera} alt='camera'/>
                </div>
              </div>
              <img 
                src={pencil} 
                alt='edit image' 
                className='edit-icon'
                onClick={() => openModal(profile.first_name + ' ' + profile.last_name)} 
              />
            </div>
          </div>
          <div style={{lineHeight:'4px', marginTop:'20px'}}>
            <h3 className='profile-name'>{profile.first_name} {profile.last_name}</h3>
            <p className='profile-email'>{profile.email}</p>
          </div>
        </div>
      ))}
      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onImageChange={handleImageChange}
        onRemoveImage={handleRemoveImage}
      />
    </div>
  );
};

export default Profile;
