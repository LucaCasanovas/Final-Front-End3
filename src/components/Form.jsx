import React, { useState } from 'react';


function Form({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza validaciones aquí
    const errors = {};

    if (formData.nombre.length <= 5) {
      errors.nombre = 'El nombre debe tener más de 5 caracteres.';
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      errors.email = 'El formato del correo electrónico no es válido.';
    }

    if (Object.keys(errors).length === 0) {
      // No hay errores, enviar el formulario
      onFormSubmit(formData);
      setFormErrors({});
    } else {
      // Hay errores, mostrar mensajes de error
      setFormErrors(errors);
    }
  };

  return (
    <main>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre completo:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        {formErrors.nombre && <p className="error-message">{formErrors.nombre}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <p className="error-message">{formErrors.email}</p>}
        <button type="submit" >Enviar</button>
      </div>
    </form>
    </main>
  );
}

export default Form;
