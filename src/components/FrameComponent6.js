import { useMemo } from "react";

const FrameComponent6 = ({
  fightingToGetWhat,
  youDeserve,
  propPadding,
  propWidth,
  propWidth1,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const youDeserveStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-center text-26xl text-gray-400 font-cormorant-garamond"
      style={frameDiv2Style}
    >
      <div
        className="w-[402px] flex flex-col items-end justify-start gap-[11px] max-w-full"
        style={frameDiv3Style}
      >
        <div className="self-stretch flex flex-col items-start justify-start">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[0.4px] leading-[54px] capitalize font-normal font-inherit z-[1] mq450:text-8xl mq450:leading-[32px] mq800:text-17xl mq800:leading-[43px]">
            {fightingToGetWhat}
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h1
              className="m-0 w-56 relative text-inherit tracking-[0.4px] leading-[54px] capitalize font-normal font-inherit inline-block shrink-0 z-[1] mq450:text-8xl mq450:leading-[32px] mq800:text-17xl mq800:leading-[43px]"
              style={youDeserveStyle}
            >
              {youDeserve}
            </h1>
          </div>
        </div>
        <div className="self-stretch h-11 flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border">
          <img
            className="h-11 w-[95px] relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/image-18.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
