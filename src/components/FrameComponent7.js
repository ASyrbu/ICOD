const FrameComponent7 = () => {
  return (
    <div id="services" className="w-[1458px] flex flex-row items-start justify-center py-0 pl-[250px] box-border max-w-full text-center text-21xl text-white font-cormorant-garamond">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap">
        <div className="w-[365px] flex flex-col items-start justify-center gap-[11px] min-w-[365px] max-w-full mq800:min-w-full mq1125:flex-1">
          <div className="self-stretch flex flex-col items-start justify-center max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.4px] leading-[59px] capitalize font-normal font-inherit z-[1] mq450:text-8xl mq450:leading-[35px] mq800:text-17xl mq800:leading-[47px]">
              Услуги, которые мы предоставляем
            </h1>
          </div>
          <img
            className="w-[95px] h-11 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/image-11.svg"
          />
        </div>
        <div className="w-[660px] flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border min-w-[660px] max-w-full text-xl text-lightgray font-outfit mq800:min-w-full mq1125:flex-1">
          <div className="self-stretch relative tracking-[0.4px] leading-[32px] z-[1] mq450:text-base mq450:leading-[26px] text-center"> {/* Обновлено */}
            Полный юридический сервис для сферы безопасности бизнеса и должностных лиц.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
