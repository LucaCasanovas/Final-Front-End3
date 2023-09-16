import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/Context'

const Detail = () => {
  const { id } = useParams(); // Obtener el ID del dentista desde la URL
  const [dentist, setDentist] = useState(null);
  const { state } = useGlobalContext();

  useEffect(() => {
    // Realizar la solicitud para obtener los datos del dentista con el ID específico
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // Reemplaza con la URL de tu API para obtener un dentista
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no tuvo éxito');
        }
        return response.json();
      })
      .then((data) => {
        // Almacena los datos del dentista en el estado
        setDentist(data);
      })
      .catch((error) => console.error('Error al obtener el dentista:', error));
  }, [id]);

  return (
    <>
    <main className={`${state.theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <h1>Detalle del Dentista: {id}</h1>
      {dentist ? (
        <div className='detail'>
          <p><span>Name</span><span>Email</span><span>Phone</span><span>Website</span></p>
          <p><span>{dentist.name}</span><span>{dentist.email}</span><span>{dentist.phone}</span><span>{dentist.website}</span></p>
        </div>
      ) : (
        <p>Cargando información del dentista...</p>
      )}
      </main>
    </>
  );
};

export default Detail;
