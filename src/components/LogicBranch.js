const LogicBranch = () => {
  return (
    <section id="landing" className="self-stretch  flex flex-row items-start  mq1125:mb-8 box-border max-w-full text-left text-3xl text-burlywood font-outfit mq800:box-border mq1350:pb-[91px] mq1350:box-border">
      <div className="flex-1 flex flex-col items-start px-10 pb-0 box-border relative gap-[40px] max-w-full mq800:gap-[20px_40px]">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt="background"
            src="/image@2x.png"
          />
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-500 z-[1]" />
        </div>
        <header className="navbar-none w-full mx-auto flex-wrap h-[85px] flex flex-row justify-start items-start gap-[20px]">
          <div className="flex flex-col w-full items-end gap-[20px] max-w-full">
            <div className="w-full h-[130px] flex flex-col items-start pt-[33px] px-0 pb-[35px] box-border relative gap-[34px] max-w-full z-[2] mq800:gap-[17px_34px] mq1350:h-auto">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
              <div className="self-stretch w-full flex flex-row items-start gap-[46px] max-w-full mq800:gap-[46px_23px] mq1350:flex-wrap">
                <div className="flex flex-row w-full items-start pt-3 px-0 pb-0">
                  <img
                    className="h-[120px] w-[120px] relativ pr-8 overflow-hidden shrink-0 max-w-full z-[2]"
                    alt="logo"
                    src="/logo.png"
                  />
                  <div className="relative tracking-[0.4px] w-[230px] leading-[36px] inline-block min-w-[61px] z-[1] mq450:text-lg mq450:leading-[28px]">
                    <a className="no-underline text-white  hover:text-burlywood visited:text-white" href="#about">
                      О Нас
                    </a>
                  </div>
                  <div className="relative tracking-[0.4px] w-[230px] leading-[36px] inline-block min-w-[95px] z-[1] mq450:text-lg mq450:leading-[28px]">
                    <a className="no-underline text-white  hover:text-burlywood visited:text-white" href="#services">
                      Услуги
                    </a>
                  </div>
                  <div className="relative tracking-[0.4px] w-[270px] leading-[36px] inline-block min-w-[64px] z-[1] mq450:text-lg mq450:leading-[28px]">
                    <a className="no-underline text-white hover:text-burlywood visited:text-white" href="#consult">
                      Связаться с нами
                    </a>
                  </div>
                  <div className="flex flex-row w-full items-start justify-end gap-[12px]">
                    <button className="cursor-pointer pt-[22px] pb-[23px] pr-[19px] pl-[22px] bg-[transparent] h-[62px] w-[62px] rounded-81xl box-border flex flex-row items-start z-[1] border-[2px] border-solid border-burlywood">
                      <div className="h-[62px] w-[62px] relative rounded-81xl box-border hidden border-[2px] border-solid border-burlywood" />
                      <img
                        className="h-[17px] w-[17px] relative overflow-hidden shrink-0 z-[1]"
                        alt="phone"
                        src="/image-2.svg"
                      />
                    </button>
                    <div className="flex flex-col items-start gap-[1px]">
                      <div className="relative tracking-[0.4px] leading-[29px] inline-block min-w-[92px] z-[1]">
                        Позвоните нам
                      </div>
                      <div className="relative text-3xl tracking-[0.4px] leading-[27px] text-white z-[1] mq450:text-lg mq450:leading-[21px]">
                        +373 67 112 112
                      </div>
                    </div>
                    <button className="cursor-pointer pt-[22px] pb-[23px] pr-[19px] pl-[22px] bg-[transparent] h-[62px] w-[62px] rounded-81xl box-border flex flex-row items-start justify-end z-[1] border-[2px] border-solid border-burlywood">
                      <div className="h-[62px] w-[62px] relative rounded-81xl box-border hidden border-[2px] border-solid border-burlywood" />
                      <img
                        className="h-4 w-[18px] relative overflow-hidden shrink-0 z-[1]"
                        alt="mail"
                        src="/image-3.svg"
                      />
                    </button>
                    <div className="flex flex-col items-start justify-end gap-[1px]">
                      <div className="relative tracking-[0.4px] leading-[29px] inline-block min-w-[106px] z-[1]">
                        Напишите нам
                      </div>
                      <div className="relative text-3xl tracking-[0.4px] leading-[27px] text-white whitespace-nowrap z-[1] mq450:text-lg mq450:leading-[21px]">
                        info@icod.global
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="self-stretch mb-10 flex flex-row flex-wrap items-start justify-end gap-[19px] max-w-full text-46xl text-white font-cormorant-garamond">
          <div className="flex-1 flex flex-col items-start justify-end pt-[110px] px-0 pb-0 box-border min-w-[435px] max-w-full mq800:pt-[71px] mq800:box-border mq800:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-end gap-[28px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-end gap-[21px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-end gap-[14px]">

                  <h1 className="m-0 self-stretch relative text-inherit tracking-[0.4px] leading-[78px] font-normal font-inherit z-[2] mq450:text-20xl mq450:leading-[47px] mq800:text-33xl mq800:leading-[62px]">
                    Мы-профессионалы своего дела
                  </h1>
                </div>
                <div className="w-[655px] relative text-3xl tracking-[0.4px] leading-[39.6px] font-outfit text-burlywood inline-block max-w-full z-[2] mq450:text-lg mq450:leading-[32px]">
                  Мы помогли бесчиссленному количеству людей в их юридических вопросах
                </div>
              </div>
              <button className="flex-1 relative text-3xl tracking-[0.4px] leading-[36px] font-outfit text-gray-300 text-center inline-block min-w-[127px]  ursor-pointer pt-[25px] pb-6 bg-burlywood w-[269px] box-border  flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-burlywood hover:bg-peru hover:box-border hover:border-[1px] hover:border-solid hover:border-peru mq450:pl-5 mq450:pr-5 mq450:box-border">
                <a href="#consult" className="w-full h-full no-underline visited:text-gray-300">
                  Связаться с нами
                </a>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogicBranch;