import { useMemo } from "react";

const Frame4 = ({
  businessLaw,
  beAwareOfNewDevelopmentsA,
  propGap,
  propWidth,
  propHeight,
  propPadding,
}) => {
  const frameStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const beAwareOfStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);



  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="w-[430px] bg-gray-300 flex flex-col items-start justify-start pt-[55px] px-[50px] pb-[70px] box-border gap-[51.69999999999982px] max-w-full text-left text-16xl text-white font-cormorant-garamond mq450:gap-[26px_51.7px] mq450:pt-9 mq450:px-5 mq450:pb-[45px] mq450:box-border"
      style={frameStyle}
    >
      <div className="w-[430px] h-[429px] relative bg-gray-300 hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.3000000000001819px]">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-7 relative gap-[8px] z-[1]">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
          <h2 className="m-0 relative text-inherit tracking-[0.4px] leading-[56px] font-normal font-inherit z-[1] mq450:text-2xl mq450:leading-[34px] mq800:text-9xl mq800:leading-[45px]">
            {businessLaw}
          </h2>
          <div
            className="w-[307px] relative text-xl tracking-[0.4px] leading-[32px] font-outfit text-lightgray inline-block z-[1] mq450:text-base mq450:leading-[26px]"
            style={beAwareOfStyle}
          >
            {beAwareOfNewDevelopmentsA}
          </div>
        </div>
        <div className="self-stretch h-px relative bg-dimgray z-[1]" />
      </div>

    </div >
  );
};

export default Frame4;
