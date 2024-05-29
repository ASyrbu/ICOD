import "./styles.css"
const TransformerNetwork = () => {
  return (
    <div className="self-stretch mt-5 flex flex-row flex-wrap items-start justify-between max-w-full gap-[20px] text-left text-xl text-lightgray font-outfit">
      <div className="w-[400px] flex px-9 pb-10 flex-col items-start justify-start gap-[39px] max-w-full mq450:gap-[19px_39px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5px]">
          <div className="self-stretch h-px relative bg-darkslategray-200" />
          <div className="self-stretch h-[81px] text-11xl flex flex-col items-start justify-start py-[21px] px-0 box-border relative gap-[20.5px] z-[1]">
            <h3 className="relative text-inherit tracking-[0.4px] leading-[39px] font-normal font-inherit z-[1] mq450:text-lg mq450:leading-[23px] mq800:text-5xl mq800:leading-[31px]">
              Полезные Ссылки
            </h3>
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
            <div className="self-stretch h-px relative bg-darkslategray-200" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-col  items-start justify-start gap-[20px] min-w-[106px] mq450:flex-1">
            <div className="relative tracking-[0.4px] leading-[32px] capitalize inline-block min-w-[58px] mq450:text-base mq450:leading-[26px]">
              <a className="no-underline text-white hover:text-burlywood visited:text-white" href="#landing">
                Главная
              </a>
            </div>
            <div className="relative tracking-[0.4px] leading-[32px] capitalize inline-block min-w-[85px] mq450:text-base mq450:leading-[26px]">
              <a className="no-underline text-white hover:text-burlywood visited:text-white" href="#about">
                О Компании
              </a>
            </div>
            <div className="relative tracking-[0.4px] leading-[32px] capitalize inline-block min-w-[105px] mq450:text-base mq450:leading-[26px]">
              <a className="no-underline text-white hover:text-burlywood visited:text-white" href="#services">
                Услуги
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[20px] min-w-[138px] mq450:flex-1">
            <div className="relative tracking-[0.4px] leading-[32px] capitalize inline-block min-w-[106px] mq450:text-base mq450:leading-[26px]">
              <a className="no-underline text-white hover:text-burlywood visited:text-white" href="#consult">
                Консультация
              </a>
            </div>
            <div className="relative tracking-[0.4px] leading-[32px] capitalize inline-block min-w-[43px] mq450:text-base mq450:leading-[26px]">
              <a className="no-underline text-white hover:text-burlywood visited:text-white" href="#partners">
                Партнеры
              </a>
            </div>
            <div className="relative tracking-[0.4px] leading-[32px] capitalize mq450:text-base mq450:leading-[26px]">
              <a className="no-underline text-white hover:text-burlywood visited:text-white" href="#make">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-9 flex flex-col items-start justify-start gap-[19px] max-w-full">
        <div className="self-stretch flex flex-col items-end justify-start gap-[0.5px] text-11xl text-white font-cormorant-garamond">
          <div className="self-stretch h-px relative  bg-darkslategray-200" />
          <div className="self-stretch h-[81px] flex flex-col items-start justify-start py-[21px] box-border relative gap-[20.5px] z-[1]">
            <h3 className="relative text-inherit tracking-[0.4px] leading-[39px] font-normal font-inherit z-[1] mq450:text-lg mq450:leading-[23px] mq800:text-5xl mq800:leading-[31px]">
              Связаться с нами
            </h3>
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
            <div className="self-stretch h-px relative bg-darkslategray-200" />
          </div>
        </div>
        <div className="w-[349px] flex flex-col items-start justify-start min-h-[50px] max-w-full">
          <div className="self-stretch  relative tracking-[0.4px] leading-[48px] mq450:text-base mq450:leading-[38px]">
            ул. Албишоара CC Atrium, of.1407
          </div>
          <div className="relative tracking-[0.4px] leading-[48px] z-[1] mq450:text-base mq450:leading-[38px]">
            Кишинёв, Республика Молдова
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-row items-start justify-start gap-[11px]">
            <div className="relative tracking-[0.4px] leading-[32px] inline-block min-w-[66px] mq450:text-base mq450:leading-[26px]">
              Телефон:
            </div>
            <div className="relative tracking-[0.4px] leading-[32px] capitalize mq450:text-base mq450:leading-[26px]">
              +373 67 112 112
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[11px] text-lgi">
            <div className="relative tracking-[0.4px] leading-[32px] inline-block min-w-[56px]">
              Email:
            </div>
            <div className="relative text-xl tracking-[0.4px] leading-[32px] whitespace-nowrap mq450:text-base mq450:leading-[26px]">
              <a href="mailto:info@icod.global" className="text-blue-500">
                info@icod.global
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-burlywood">
          <div className=" flex-row items-start justify-start ">
            <div className="relative tracking-[0.4px] text-[24px] leading-[32px] inline-block min-w-[71px] z-[1] mq450:text-base mq450:leading-[26px]">
              Мы в Соц.Сетях :
            </div>
            <div className="links h-6 flex flex-row gap-x-5 items-start justify-start pt-5  box-border">
              <a href="https://www.facebook.com/ICOD.GLOBAL/" target="_blank" rel="noopener noreferrer">
                <img
                  className="w-[25px] h-[25px] relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/social-icons.svg"
                />
              </a>
              <a href="https://www.instagram.com/icod.global?igsh=MTFmcHAzejV1ZHUyeg==" target="_blank" rel="noopener noreferrer">
                <img
                  className="w-[25px] h-[25px] relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/social-icons-1.svg"
                />
              </a>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformerNetwork;


/*<a href="https://www.facebook.com/ICOD.GLOBAL/" target="_blank" rel="noopener noreferrer">
<img
  className="w-[25px] h-[25px] relative overflow-hidden shrink-0 z-[1]"
  alt=""
  src="/social-icons-2.svg"
/>
</a>
<a href="https://www.facebook.com/ICOD.GLOBAL/" target="_blank" rel="noopener noreferrer">
<img
  className="w-[25px] h-[25px] relative overflow-hidden shrink-0 z-[1]"
  alt=""
  src="/social-icons-3.svg"
/>
</a>*/