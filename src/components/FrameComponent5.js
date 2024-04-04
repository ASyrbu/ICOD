import FrameComponent6 from "./FrameComponent6";

const FrameComponent5 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full shrink-0 text-center text-20xl text-gray-400 font-cormorant-garamond">
      <div className="w-[635px] flex flex-col items-start justify-start gap-[40px] max-w-full mq800:gap-[20px_40px]">
        <h1>Квалифицированные юридические услуги в сфере граждан?</h1>
        <div className="self-stretch flex flex-col items-start justify-start text-3xl text-gray-200 font-outfit">
          <div className="self-stretch relative tracking-[0.4px] leading-[32px] z-[1] mq450:text-base mq450:leading-[26px]">
            Мы не будем говорить вам о том,что вы не можете делать.
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
            <div className="w-[448px] relative tracking-[0.4px] leading-[32px] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[26px]">
              Мы расскажем вам, как именно сделать то,что вы хотите.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
