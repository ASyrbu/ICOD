const FrameComponent2 = () => {
  return (
    <section id="consult" className="self-stretch flex flex-row items-start justify-center pt-0 pl-[150px] pb-[139px] box-border max-w-full text-left text-6xl text-white font-outfit w-[1700px] mq800:pb-[58px] mq800:box-border mq1125:pb-[90px] mq1125:box-border">
      <div className="flex-1 flex flex-row items-start justify-start py-[140px] px-10 box-border bg-[url('/public/image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:pt-[59px] mq800:pb-[59px] mq800:box-border mq1125:pt-[91px] mq1125:pb-[91px] mq1125:box-border">
        <img
          className="h-[945px] w-[1440px] relative object-cover hidden max-w-full"
          alt=""
          src="/image@2x.png"
        />
        <div className="h-[715px] flex-1 relative bg-gray-300 max-w-full z-[1] mq1125:h-auto mq1125:min-h-[665]">
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] bg-gray-300 h-full hidden" />
          <div className="absolute top-[100px] left-[100px] w-[557px] h-[38px] hidden" />
          <div className="absolute top-[100px] left-[703px] w-[557px] h-[38px] hidden" />
          <div className="absolute top-[187.9px] left-[100px] w-[1160px] flex flex-row flex-wrap items-start justify-start py-[38px] px-0 box-border gap-[46.40000000000009px] min-h-[88px] max-w-full z-[2]">
            <div className="h-[38px] w-[557px] relative hidden max-w-full" />
            <div className="h-[38px] w-[557px] relative hidden max-w-full" />
            <div className="h-px flex-1 relative bg-darkslategray-200 min-w-[362px] max-w-full z-[1] mq800:min-w-full" />
            <div className="h-px flex-1 relative bg-darkslategray-200 min-w-[362px] max-w-full z-[1] mq800:min-w-full" />
          </div>
          <button className="cursor-pointer pt-[20px] pb-[30px] pr-[30px] pl-[30px] bg-white absolute top-[525px] left-[523px] flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-white hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
            <div className="h-[85px] w-[305px] relative bg-white box-border hidden border-[1px] border-solid border-white" />
            <b className="relative text-6xl tracking-[0.4px] leading-[22px] font-outfit text-darkslategray-200 text-left z-[2]">
              Записаться на бесплатную консультацию
            </b>
          </button>
          <div className="absolute top-[89px] left-[100px] w-[1160px] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[46.200000000000045px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[95px] min-w-[362px] max-w-full mq800:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[38.10000000000037px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[26.899999999999636px]">
                    <input
                      className="w-[250px] [border:none] [outline:none] font-outfit text-6xl bg-[transparent] h-[22px] relative tracking-[0.4px] leading-[21.6px] text-white text-left inline-block p-0 z-[2] mq450:text-xl mq450:leading-[17px]"
                      placeholder="Ваше Имя*"
                      type="text"
                    />
                    <div className="self-stretch h-px relative bg-darkslategray-200 z-[2]" />
                  </div>
                  <div className="relative tracking-[0.4px] leading-[22px] z-[1] mq450:text-xl mq450:leading-[17px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[26.899999999999636px]">
                      <input
                        className="w-[300px] [border:none] [outline:none] font-outfit text-6xl bg-[transparent] h-[22px] relative tracking-[0.4px] leading-[21.6px] text-white text-left inline-block p-0 z-[2] mq450:text-xl mq450:leading-[17px]"
                        placeholder="Моб.Телефон*"
                        type="text"
                      />
                      <div className="self-stretch h-px relative bg-darkslategray-200 z-[2]" />
                    </div>                  </div>
                </div>
                <div className="relative tracking-[0.4px] leading-[22px] z-[2] mq450:text-xl mq450:leading-[17px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[26.899999999999636px]">
                    <input
                      className="w-[623px] [border:none] [outline:none] font-outfit text-6xl bg-[transparent] h-[22px] relative tracking-[0.4px] leading-[21.6px] text-white text-left inline-block p-0 z-[2] mq450:text-xl mq450:leading-[17px]"
                      placeholder="Ваше Сообщение"
                      type="text"
                    />
                    <div className="self-stretch h-px relative bg-darkslategray-200 z-[2]" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[36.10000000000037px] min-w-[362px] max-w-full mq800:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[26.899999999999636px]">
                  <input
                    className="w-[350px] [border:none] [outline:none] font-outfit text-6xl bg-[transparent] h-[22px] relative tracking-[0.4px] leading-[22px] text-white text-left inline-block p-0 z-[2] mq450:text-xl mq450:leading-[17px]"
                    placeholder="Ваш email*"
                    type="text"
                  />
                  <div className="self-stretch h-px relative bg-darkslategray-200 z-[2]" />
                </div>
                <div className="relative tracking-[0.4px] leading-[22px] inline-block min-w-[85px] z-[1] mq450:text-xl mq450:leading-[17px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[26.899999999999636px]">
                    <input
                      className="w-[300px] [border:none] [outline:none] font-outfit text-6xl bg-[transparent] h-[22px] relative tracking-[0.4px] leading-[21.6px] text-white text-left inline-block p-0 z-[2] mq450:text-xl mq450:leading-[17px]"
                      placeholder="Тема"
                      type="text"
                    />
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

export default FrameComponent2;
