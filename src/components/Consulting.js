
import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';

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

    <section id="consult" className="flex flex-col items-center justify-center py-20 px-10 gap-10 bg-gray-300">
      <h1 className="text-white relative text-17xl tracking-[0.4px] leading-[40px] font-normal mb-10 sm:leading-[30px]">Записаться на бесплатную консультацию</h1>
      <form className="grid grid-cols-1 gap-6 w-full  bg-white px-auto rounded-lg shadow-lg" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 py-3 text-center text-2xl font-semibold">Ваше Имя*</label>
          <input
            className="mx-6 py-3  bg-gray-100 border border-gray-300  rounded-md placeholder-gray-500 text-gray-800 focus:outline-none focus:border-blue-500"
            placeholder="Введите ваше имя"
            type="text"
            id="name"
            name="from_name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 pb-2 text-center text-2xl font-semibold">Моб.Телефон*</label>
          <input
            className="mx-6 py-3  bg-gray-100 border border-gray-300 rounded-md placeholder-gray-500 text-gray-800 focus:outline-none focus:border-blue-500"
            placeholder="Введите ваш мобильный телефон"
            type="text"
            id="phone"
            name="phone"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 pb-2 text-center text-2xl font-semibold">Email*</label>
          <input
            className="mx-6 py-3  bg-gray-100 border border-gray-300 rounded-md placeholder-gray-500 text-gray-800 focus:outline-none focus:border-blue-500"
            placeholder="Введите ваш email"
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 pb-2 text-center text-2xl font-semibold">Тема</label>
          <input
            className="mx-6 py-3 bg-gray-100 border border-gray-300 rounded-md placeholder-gray-500 text-gray-800 focus:outline-none focus:border-blue-500"
            placeholder="Введите тему"
            type="text"
            id="subject"
            name="user_subject"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 pb-2 text-center text-2xl font-semibold">Ваше сообщение</label>
          <input
            className="mx-6 py-3 bg-gray-100 border border-gray-300 rounded-md placeholder-gray-500 text-gray-800 focus:outline-none focus:border-blue-500"
            placeholder="Введите ваше сообщение"
            id="message"
            name="message"
          ></input>
        </div>
        <button className="mx-[250px] my-[30px] py-5 px-auto bg-burlywood text-[30px] font-cormorant-garamond text-white rounded-md hover:bg-peru"
          type="submit"
          value="Send"
        >
          Отправить
        </button>
      </form>
    </section>
  );
};

export default Consulting;
