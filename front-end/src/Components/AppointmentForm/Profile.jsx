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

  const getInitialAvatar = (name) => {
    const initial = name.charAt(0).toUpperCase();
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 100;
    canvas.height = 100;

    // Draw background circle
    context.fillStyle = '#d07322'; // Set any background color
    context.beginPath();
    context.arc(50, 50, 50, 0, Math.PI * 2);
    context.fill();

    // Draw initial
    context.fillStyle = '#fff'; // Text color
    context.font = '50px Arial'; // Font size and family
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(initial, 50, 55);

    return canvas.toDataURL();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && selectedProfile) {
      const newProfiles = profiles.map(profile => {
        if (profile.first_name + ' ' + profile.last_name === selectedProfile.fullName) {
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
        if (profile.first_name + ' ' + profile.last_name === selectedProfile.fullName) {
          return { ...profile, image: null };
        }
        return profile;
      });
      setProfiles(newProfiles);
      localStorage.setItem('userProfiles', JSON.stringify(newProfiles));
      setIsModalOpen(false);
    }
  };

  const openModal = (profile) => {
    const fullName = profile.first_name + ' ' + profile.last_name;
    setSelectedProfile({ ...profile, fullName });
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
                  src={profile.image || getInitialAvatar(profile.first_name)}
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
                onClick={() => openModal(profile)} 
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
        profile={selectedProfile}  // Pass the selected profile
        getInitialAvatar={getInitialAvatar}  // Pass the function to generate the avatar
      />

    </div>
  );
};

export default Profile;
