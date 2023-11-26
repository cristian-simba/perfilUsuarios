import React from 'react';
import Navbar from '../components/Navbar';
import './Profile.css'; // Estilos para el perfil

const Profile = () => {
  return (
    <div>
      <Navbar />
      {/* Contenido de tu perfil */}
      <div className="profile-container">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="profile-picture"
          />
          <h2>Nombre de Usuario</h2>
        </div>
        <div className="profile-details">
          <p>Correo electrónico: correo@example.com</p>
          {/* Otros detalles del perfil */}
        </div>
      </div>
    </div>
  );
};

export default Profile;