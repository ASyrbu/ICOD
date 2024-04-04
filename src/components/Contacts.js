const FrameComponent3 = () => {
  return (
    <section id="make" className="self-stretch flex flex-row items-start justify-start pt-[80px] px-10 pb-[150px] box-border max-w-full text-left text-26xl text-white font-cormorant-garamond mq800:pb-[97px] mq800:box-border">
      <div className="flex-1 flex flex-row items-start justify-start gap-[102px] max-w-full mq450:gap-[102px_25px] mq800:gap-[102px_51px] mq1350:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[409px] max-w-full mq800:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[37px] max-w-full mq800:gap-[18px_37px]">
            <div className="w-[577px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[9px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[0.4px] leading-[58.5px] capitalize font-normal font-inherit mq450:text-8xl mq450:leading-[35px] mq800:text-17xl mq800:leading-[47px]">
                Сделайте правильный ход
              </h1>
              <img
                className="w-[95px] h-11 relative overflow-hidden shrink-0"
                alt=""
                src="/image-50.svg"
              />
            </div>
            <div className="self-stretch relative text-xl tracking-[0.4px] leading-[32px] font-outfit text-lightgray mq450:text-base mq450:leading-[26px]">
              "Найдите Правовую Уверенность: Обращайтесь к нам Прямо Сейчас!"
            </div>
            <button className="cursor-pointer pt-6 px-[70px] pb-[25px] bg-burlywood w-[257px] box-border flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-burlywood hover:bg-peru hover:box-border hover:border-[1px] hover:border-solid hover:border-peru mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[85px] w-[257px] relative bg-burlywood box-border hidden border-[1px] border-solid border-burlywood" />
              <div className="flex-1 relative text-3xl tracking-[0.4px] leading-[36px] font-outfit text-gray-300 text-center inline-block min-w-[115px] z-[1]">
                Связаться с нами
              </div>
            </button>
          </div>
        </div>
        <div className="flex-[0.873] bg-white flex flex-row items-start justify-start p-10 box-border min-w-[409px] max-w-full text-23xl text-gray-300 mq800:pt-[26px] mq800:pb-[26px] mq800:box-border mq800:min-w-full mq1350:flex-1">
          <div className="h-[490px] w-[630px] relative bg-white hidden max-w-full" />
          <div className="flex-1 box-border flex flex-col items-start justify-start pt-[65px] pb-[75px] pr-[54px] pl-[55px] gap-[37px] max-w-full z-[1] border-[15px] border-solid border-lightgray mq450:pt-[42px] mq450:pb-[49px] mq450:box-border mq800:gap-[18px_37px] mq800:pl-[27px] mq800:pr-[27px] mq800:box-border">
            <div className="w-[550px] h-[410px] relative box-border hidden max-w-full border-[15px] border-solid border-lightgray" />
            <div className="w-[411px] flex flex-col items-start justify-start gap-[12px] max-w-full">
              <h1 className="m-0 relative text-inherit tracking-[0.4px] leading-[55px] font-normal font-inherit z-[1] mq450:text-6xl mq450:leading-[33px] mq800:text-15xl mq800:leading-[44px]">
                Получить бесплатную консультацию
              </h1>
              <div className="self-stretch relative text-xl tracking-[0.4px] leading-[32px] font-outfit text-gray-200 z-[1] mq450:text-base mq450:leading-[26px]">
                Обращайтесь сейчас по номеру и получите 100% бесплатную консультацию
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[15px] text-lg font-outfit mq800:flex-wrap">
              <div className="h-[70px] bg-burlywood flex flex-row items-start justify-start pt-[22px] pb-[21px] pr-[21px] pl-[22px] box-border z-[1]">
                <div className="h-[70px] w-[70px] relative bg-burlywood hidden" />
                <img
                  className="h-[27px] w-[27px] relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/image-51.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.4px] leading-[22px] inline-block min-w-[92px] z-[1]">
                    Наш номер:
                  </div>
                  <div className="relative text-11xl tracking-[0.4px] leading-[42px] z-[1] mq450:text-lg mq450:leading-[25px] mq800:text-5xl mq800:leading-[34px]">
                    +373 67 112 112
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
