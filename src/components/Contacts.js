import "./styles.css";

const FrameComponent3 = () => {
  return (
    <section id="make" className="luxury-section py-20 px-6 text-left text-white font-cormorant-garamond">
      <div className="luxury-container flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="luxury-content flex-1 flex flex-col items-start justify-start">
          <div className="luxury-heading max-w-full mb-10">
            <h1 className="text-5xl leading-tight capitalize mb-4">
              Сделайте правильный ход
            </h1>
            <p className=" text-2xl leading-relaxed text-lightgray">
              "Найдите Правовую Уверенность: Обращайтесь к нам Прямо Сейчас!"
            </p>
          </div>
          <button className="luxury-button hover:cursor-pointer border-solid bg-burlywood border-burlywood hover:bg-peru hover:box-border hover:border-[1px] hover:border-solid hover:border-peru">
            <a href="#consult" className="w-full h-full no-underline visited:text-gray-300">
              Связаться с нами
            </a>

          </button>
        </div>
        <div className="luxury-form flex-1 bg-darkblue text-gray-900 p-8 rounded-lg shadow-lg border-2 border-gold">
          <div className="flex flex-col items-start justify-start gap-6">
            <h1 className="text-3xl leading-tight mb-4 text-white">
              Получить бесплатную консультацию
            </h1>
            <p className="text-xl leading-relaxed text-lightgray mb-6">
              Обращайтесь сейчас по номеру и получите 100% бесплатную консультацию
            </p>
            <div className="flex flex-col lg:flex-row items-start justify-start ">
              <div className="flex flex-row gap-x-5">
                <img className="luxury-contact-icon mt-4 bg-gold p-3 rounded-full w-6 h-6" alt="" src="/image-51.svg" />
                <div className="flex flex-col">
                  <p className="text-lg leading-6 text-white">Наш номер:</p>
                  <p className="text-lg mt-0x leading-tight  text-gold">
                    +373 67 112 112
                  </p>
                </div>

              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
