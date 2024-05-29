import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles.css';

export const Consulting = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const phoneNumber = form.current.phone.value;
    const email = form.current.email.value;

    // Регулярное выражение для номера телефона: должен начинаться на +373 и состоять из 11 цифр
    const phoneRegex = /^\+373\d{8}$/;

    // Регулярное выражение для электронного адреса
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Проверка введенного номера телефона
    if (!phoneRegex.test(phoneNumber)) {
      alert('Пожалуйста, введите корректный номер телефона в формате +373XXXXXXXX.');
      return;
    }

    // Проверка введенного электронного адреса
    if (!emailRegex.test(email)) {
      alert('Пожалуйста, введите корректный адрес электронной почты.');
      return;
    }

    emailjs
      .sendForm('service_ojnwz6l', 'template_ssyhm1e', form.current, {
        publicKey: 'wvEmm-gmGKOJKsg9H',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Вашая заявка отправлена!');
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
