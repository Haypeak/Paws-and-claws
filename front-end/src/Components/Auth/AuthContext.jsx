import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    token: null
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthState({
        isAuthenticated: true,
        token: token
      });
    }
  }, []);

  const loginUser = async (email, password) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(email + ':' + password)}`
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const { token } = data;

      localStorage.setItem('token', token);
      setAuthState({
        isAuthenticated: true,
        token: token
      });

      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({
      isAuthenticated: false,
      token: null
    });
  };

  const updateUser = async (userData) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/auth/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Failed to update user profile');
      }

      const updatedUser = await response.json();
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('Update user error:', error);
      return { success: false, error: error.message };
    }
  };

  // Comment out pet-related functions
  /*
  const fetchUserPets = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/pets', {
        headers: {
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const pets = await response.json();
      return pets;
    } catch (error) {
      console.error('Error fetching pets:', error);
      throw new Error(`Failed to fetch user pets: ${error.message}`);
    }
  };

  const addPet = async (petData) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        },
        body: JSON.stringify(petData)
      });

      if (!response.ok) {
        throw new Error('Failed to add pet');
      }

      const newPet = await response.json();
      return newPet;
    } catch (error) {
      console.error('Error adding pet:', error);
      throw error;
    }
  };

  const updatePet = async (petId, petData) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/pets/${petId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        },
        body: JSON.stringify(petData)
      });

      if (!response.ok) {
        throw new Error('Failed to update pet');
      }

      const updatedPet = await response.json();
      return updatedPet;
    } catch (error) {
      console.error('Error updating pet:', error);
      throw error;
    }
  };

  const deletePet = async (petId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/pets/${petId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${authState.token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete pet');
      }
    } catch (error) {
      console.error('Error deleting pet:', error);
      throw error;
    }
  };
  */

  return (
    <AuthContext.Provider value={{ 
      authState, 
      loginUser, 
      logout, 
      updateUser, 
      // fetchUserPets, 
      // addPet, 
      // updatePet, 
      // deletePet 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
