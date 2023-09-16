import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Obtén los datos actuales del localStorage (si existen)
    const favCards = JSON.parse(localStorage.getItem('favCards')) || [];

    // Verifica si esta Card ya se encuentra en favoritos
    const isAlreadyFav = favCards.some((card) => card.id === id);

    if (!isAlreadyFav) {
      // Si no está en favoritos, agrégala
      favCards.push({ id, name, username });

      // Guarda la lista actualizada en localStorage
      localStorage.setItem('favCards', JSON.stringify(favCards));
      alert('La Card se ha agregado a favoritos.');
    } else {
      alert('La Card ya está en favoritos.');
    }
  }

  return (
    <div className="card">
      <img src="../public/images/doctor.jpg" alt="doctor-image" className="image-doctor" />
      <Link to={`/Detail/${id}`}>{name} {username}</Link>
      {/* En cada card deberán mostrar el name, username y el id */}
      {/* No debes olvidar que la Card a su vez servirá como Link hacia la página de detalle */}
      {/* Además, deberán integrar la lógica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
