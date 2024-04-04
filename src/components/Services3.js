import { useMemo } from "react";

const Frame3 = ({
  carAccident,
  beingUntruthfulWillGetYou,
  iMAGE,
  propGap,
  propAlignSelf,
  propWidth,
  propHeight,
  propHeight1,
  propFlex,
  propMaxHeight,
}) => {
  const frame1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const beingUntruthfulWillStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const iMAGEIcon1Style = useMemo(() => {
    return {
      height: propHeight1,
      flex: propFlex,
      maxHeight: propMaxHeight,
    };
  }, [propHeight1, propFlex, propMaxHeight]);

  return (
    <div
      className="w-[430px] bg-gray-300 flex flex-col items-start justify-start pt-[55px] px-[50px] pb-[70px] box-border gap-[56.69999999999982px] max-w-full text-left text-16xl text-white font-cormorant-garamond mq450:gap-[28px_56.7px] mq450:pt-9 mq450:px-5 mq450:pb-[45px] mq450:box-border"
      style={frame1Style}
    >
      <div className="w-[430px] h-[429px] relative bg-gray-300 hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.3000000000001819px]">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-7 relative gap-[8px] shrink-0 z-[1]">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
          <h2 className="m-0 relative text-inherit tracking-[0.4px] leading-[56px] font-normal font-inherit z-[1] mq450:text-2xl mq450:leading-[34px] mq800:text-9xl mq800:leading-[45px]">
            {carAccident}
          </h2>
          <div
            className="self-stretch relative text-xl tracking-[0.4px] leading-[32px] font-outfit text-lightgray z-[1] mq450:text-base mq450:leading-[26px]"
            style={beingUntruthfulWillStyle}
          >
            {beingUntruthfulWillGetYou}
          </div>
        </div>
        <div className="self-stretch h-px relative bg-dimgray z-[1]" />
      </div>

    </div>
  );
};

export default Frame3;
