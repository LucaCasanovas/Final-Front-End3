import React, { useState, useEffect } from 'react';
import Card from './Card';
import { useGlobalContext } from '../context/Context'

const Home = () => {
  const [comments, setComments] = useState([]);
  const { state } = useGlobalContext();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error al obtener los comentarios:', error));
  }, []);

  return (
    <main className={`home ${state.theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <h1>Home</h1>
      <div className='card-grid'>
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
