import React from 'react'
import Form from '../components/Form'
import { useGlobalContext } from '../context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contacts = () => {
  const { state } = useGlobalContext();
  const handleFormSubmit = (formData) => {
    // Aquí puedes manejar el envío de datos al servidor si es necesario
    const successMessage = `Gracias ${formData.nombre}, te contactaremos cuanto antes vía email.`;
    alert(successMessage); // Muestra un mensaje de éxito (puedes personalizar esto)
  };
  return (
    <main className={`${state.theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
    <div>

      <Form onFormSubmit={handleFormSubmit} />
    </div>
    </main>
  )
}

export default Contacts
