import FrameComponent6 from "./FrameComponent6";
import ErrorHandler from "./ErrorHandler";

const ConditionalGuard = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[150px] box-border max-w-full text-center text-11xl text-gray-400 font-cormorant-garamond mq800:pb-[63px] mq800:box-border mq1350:pb-[97px] mq1350:box-border">
      <div className="flex-1 bg-white flex flex-col items-start justify-start pt-[124px] px-10 pb-[120.09999999999944px] box-border gap-[70.30000000000018px] max-w-full mq450:gap-[18px_70.3px] mq800:gap-[35px_70.3px] mq800:pt-[53px] mq800:pb-[51px] mq800:box-border mq1125:pt-[81px] mq1125:pb-[78px] mq1125:box-border">
        <div className="w-[1440px] h-[1152px] relative bg-white hidden max-w-full" />
        <FrameComponent6
          fightingToGetWhat="Наши квалифицированные специалисты"
          youDeserve="помогут вам в ваших юридических вопросах"
          propPadding="unset"
          propWidth="692px"
          propWidth1="481px"
        />
        <div className="self-stretch grid flex-row items-start justify-start gap-[30.05000000000001px] max-w-full grid-cols-[repeat(3,_minmax(325px,_1fr))] z-[1] mq800:gap-[30.1px_15px] mq800:grid-cols-[minmax(325px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(325px,_563px))]">
          <ErrorHandler
            iMAGE="/image-36.svg"
            iMAGE1="/image-37.svg"
            iMAGE2="/image-38.svg"
            iMAGE3="/image-39.svg"
            iMAGE4="/image-40@2x.png"
            johnTurner="John Turner"
            civilAttorney="Civil Attorney"
          />
          <div className="h-[674.6px] flex flex-col items-end justify-start pt-0 px-0 pb-[10.900000000000546px] box-border gap-[20.099999999999454px] max-w-full">
            <div className="self-stretch flex-1 flex flex-row items-end justify-center py-0 pr-5 pl-[21px] box-border bg-[url('/public/image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <img
                className="h-[574px] w-[433px] relative object-cover hidden max-w-full"
                alt=""
                src="/image@2x.png"
              />
              <div className="w-[217px] bg-white flex flex-col items-start justify-start pt-[25px] px-9 pb-0 box-border gap-[20px] z-[1]">
                <div className="w-[217px] h-[66px] relative bg-white hidden" />
                <div className="h-5 flex flex-row items-start justify-start gap-[20px]">
                  <img
                    className="h-5 w-[21px] relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                    alt=""
                    src="/image-41.svg"
                  />
                  <div className="h-[19px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <img
                      className="w-[22px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/image-42.svg"
                    />
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                    alt=""
                    src="/image-43.svg"
                  />
                  <img
                    className="h-5 w-[21px] relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                    alt=""
                    src="/image-44.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[19px] pl-[18px]">
                  <div className="h-px flex-1 relative bg-burlywood z-[1]" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="w-[180px] flex flex-col items-end justify-start">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-[7px]">
                  <h3 className="m-0 flex-1 relative text-inherit tracking-[0.4px] leading-[39px] font-normal font-inherit mq450:text-lg mq450:leading-[23px] mq800:text-5xl mq800:leading-[31px]">
                    Martha Black
                  </h3>
                </div>
                <div className="self-stretch relative text-xl tracking-[0.4px] leading-[32px] font-outfit text-burlywood mt-[-1px] mq450:text-base mq450:leading-[26px]">
                  Associate Attorney
                </div>
              </div>
            </div>
          </div>
          <ErrorHandler
            iMAGE="/image-45.svg"
            iMAGE1="/image-46.svg"
            iMAGE2="/image-47.svg"
            iMAGE3="/image-48.svg"
            iMAGE4="/image-49@2x.png"
            johnTurner="Brian Gomez"
            civilAttorney="Titular Attorney"
            propRight="24.92%"
            propLeft="24.99%"
            propLeft1="calc(50% - 216.35px)"
            propWidth="162px"
            propMinWidth="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default ConditionalGuard;
