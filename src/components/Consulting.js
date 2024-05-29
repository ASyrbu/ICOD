import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles.css';

export const Consulting = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ojnwz6l', 'template_ssyhm1e', form.current, {
        publicKey: 'wvEmm-gmGKOJKsg9H',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="consult" className="consult-section">
      <h1 className="consult-title">Записаться на бесплатную консультацию</h1>
      <form className="consult-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label className="form-label">Ваше Имя*</label>
          <input
            className="form-input"
            placeholder="Введите ваше имя"
            type="text"
            id="name"
            name="from_name"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Моб.Телефон*</label>
          <input
            className="form-input"
            placeholder="Введите ваш мобильный телефон"
            type="text"
            id="phone"
            name="phone"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email*</label>
          <input
            className="form-input"
            placeholder="Введите ваш email"
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Тема</label>
          <input
            className="form-input"
            placeholder="Введите тему"
            type="text"
            id="subject"
            name="user_subject"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Ваше сообщение</label>
          <textarea
            className="form-input"
            placeholder="Введите ваше сообщение"
            id="message"
            name="message"
          ></textarea>
        </div>
        <button className="submit-button" type="submit" value="Send">
          Отправить
        </button>
      </form>
    </section>
  );
};

export default Consulting;
