import React from 'react'

function Contact() {
    return (
      <div className="contact">
        <form className="contact__form">
          <label htmlFor="name" className="contact__form__label">
            Nombre*:{" "}
          </label>
          <input
            type="text"
            name="name"
            className="contact__form__input"
            placeholder="Nombre completo"
            required
          />

          <label htmlFor="email" className="contact__form__label">
            Correo*:{" "}
          </label>
          <input
            type="email"
            name="email"
            className="contact__form__input"
            placeholder="correoejemplo@gmail.com"
            required
          />
          <label htmlFor="subject" className="contact__form__label">
            Asunto*:{" "}
          </label>
          <input
            type="text"
            name="subject"
            className="contact__form__input"
            placeholder="Información sobre casa"
            required
          />
          <label htmlFor="message" className="contact__form__label">
            Mensaje*:{" "}
          </label>
          <textarea
            className="contact__form__textarea"
            name="message"
            cols="30"
            rows="10"
            placeholder="Mensaje ..."
          />
          <button className="contact__form__button">Enviar</button>
        </form>
      </div>
    );
}

export default Contact
