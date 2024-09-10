import React, { useState } from 'react';

const AddPetForm = ({ onAdd, onCancel }) => {
  const [petData, setPetData] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
  });

  const handleChange = (e) => {
    setPetData({ ...petData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(petData);
  };

  return (
    <form onSubmit={handleSubmit} className="pet-form">
      <h3>Add New Pet</h3>
      <input
        type="text"
        name="name"
        value={petData.name}
        onChange={handleChange}
        placeholder="Pet Name"
        required
      />
      <input
        type="text"
        name="species"
        value={petData.species}
        onChange={handleChange}
        placeholder="Species"
        required
      />
      <input
        type="text"
        name="breed"
        value={petData.breed}
        onChange={handleChange}
        placeholder="Breed"
        required
      />
      <input
        type="number"
        name="age"
        value={petData.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <div className="form-actions">
        <button type="submit" className="small-button save">Add Pet</button>
        <button type="button" onClick={onCancel} className="small-button cancel">Cancel</button>
      </div>
    </form>
  );
};

export default AddPetForm;
