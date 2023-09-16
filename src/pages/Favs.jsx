import React from "react";
import Card from '../components/Card'
import { useGlobalContext } from '../context/Context'

const Favs = () => {
    // Obtener los datos de los dentistas favoritos desde el localStorage
    const favDentists = JSON.parse(localStorage.getItem('favCards')) || [];
    const { state } = useGlobalContext();
  
    return (
      <>
      <main className={`${state.theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
        <h1>Dentistas Favoritos</h1>
        <div className="card-grid">
          {favDentists.length === 0 ? (
            <p>No tienes dentistas favoritos.</p>
          ) : (
            favDentists.map((dentist) => (
              <Card
                key={dentist.id}
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
              />
            ))
          )}
        </div>
        </main>
      </>
    );
  };

export default Favs