import React, { useState, useEffect } from 'react';
import Card from './Card'; // Asegúrate de importar el componente Card
import { useGlobalContext } from '../context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [comments, setComments] = useState([]);
  const { state } = useGlobalContext();

  useEffect(() => {
    // Realiza la petición a la API para obtener los comentarios
    fetch('https://jsonplaceholder.typicode.com/users') // Reemplaza con la URL de tu API
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error al obtener los comentarios:', error));
  }, []);

  return (
    <main className={`home ${state.theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Renderiza las cards con la información de los comentarios */}
        {comments.map((comment) => (
          <Card
            key={comment.id}
            name={comment.name}
            username={comment.username}
            id={comment.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
