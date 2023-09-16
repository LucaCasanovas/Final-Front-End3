import React from 'react'
import Form from '../components/Form'
import { useGlobalContext } from '../context/Context'


const Contacts = () => {
  const { state } = useGlobalContext();
  const handleFormSubmit = (formData) => {
    const successMessage = `Gracias ${formData.nombre}, te contactaremos cuanto antes vía email.`;
    alert(successMessage);
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
