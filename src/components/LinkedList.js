const LinkedList = () => {
  return (
    <section
      id="partners"
      className="self-stretch bg-white flex flex-col items-start justify-center pt-20 pb-[129.69999999999982px] box-border gap-[0.3000000000001819px] max-w-full z-[3] text-left text-31xl text-gray-400 font-cormorant-garamond mq450:pt-[52px] mq450:pb-[84px] mq450:box-border"
    >      <div className="self-stretch w-[2000px] flex flex-row items-start justify-center max-w-full">
        <img
          className="h-[70px] w-[75px] pl-8 relative overflow-hidden shrink-0 min-h-[60px] z-[1]"
          alt=""
          src="/image-21.svg"
        />
        <div className="flex flex-row items-start justify-center gap-[20px] max-w-full mq800:flex-wrap ">
          <div className="w-[400px] flex items-stretch flex-col pt-2.5 px-0 pb-0 box-border max-w-full ">
            <h1 className="m-0 pl-4 self-stretch relative text-inherit tracking-[0.4px] leading-[60px] capitalize font-normal font-inherit z-[1] mq450:text-11xl mq450:leading-[36px] mq800:text-21xl mq800:leading-[48px]">
              Наши Партнеры
            </h1>
            <div className="flex flex-row items-center pt-[40px] justify-center gap-[120px] max-w-full mq800:flex-col mq800:gap-[20px_20px]">
              <img
                className="h-[200px] w-[200px] relative overflow-hidden shrink-0 min-h-[80px] z-[1]"
                loading="lazy"
                alt=""
                src="/ascara.jpg"
              />
              <img
                className="h-[200px] w-[200px] relative overflow-hidden shrink-0 min-h-[80px] z-[1]"
                loading="lazy"
                alt=""
                src="/kodeson.jfif"
              />
              <img
                className="h-[200px] w-[200px] relative overflow-hidden shrink-0 min-h-[80px] z-[1]"
                loading="lazy"
                alt=""
                src="/ascara.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedList;
