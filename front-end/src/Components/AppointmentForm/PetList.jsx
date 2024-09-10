import React from 'react';

const PetList = ({ pets, onEdit, onDelete }) => {
  return (
    <div className="pet-list">
      {pets.map(pet => (
        <div key={pet.id} className="pet-item">
          <p><strong>Name:</strong> {pet.name}</p>
          <p><strong>Species:</strong> {pet.species}</p>
          <p><strong>Breed:</strong> {pet.breed}</p>
          <button onClick={() => onEdit(pet)} className="small-button edit">Edit</button>
          <button onClick={() => onDelete(pet.id)} className="small-button delete">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PetList;
