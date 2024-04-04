import { useMemo } from "react";

const ErrorHandler = ({
  iMAGE,
  iMAGE1,
  iMAGE2,
  iMAGE3,
  iMAGE4,
  johnTurner,
  civilAttorney,
  propRight,
  propLeft,
  propLeft1,
  propWidth,
  propMinWidth,
}) => {
  const dataFlowControllerStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const iMAGEIcon2Style = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const frameDiv5Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const civilAttorneyStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[10.900000000000546px] box-border gap-[20.099999999999454px] max-w-full text-center text-11xl text-gray-400 font-cormorant-garamond">
      <div className="self-stretch h-[573.6px] relative">
        <div
          className="absolute w-[50.08%] top-[507.7px] right-[24.99%] left-[24.92%] bg-white flex flex-col items-start justify-start pt-[25px] pb-0 pr-9 pl-[37px] box-border gap-[20px]"
          style={dataFlowControllerStyle}
        >
          <div className="w-[217px] h-[66px] relative bg-white hidden" />
          <div className="h-5 flex flex-row items-start justify-start gap-[20px]">
            <img
              className="h-5 w-[21px] relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
              alt=""
              src={iMAGE}
            />
            <div className="h-[19px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <img
                className="w-[22px] h-[18px] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src={iMAGE1}
              />
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
              alt=""
              src={iMAGE2}
            />
            <img
              className="h-5 w-[21px] relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
              alt=""
              src={iMAGE3}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[19px] pl-[17px]">
            <div className="h-px flex-1 relative bg-burlywood z-[1]" />
          </div>
        </div>
        <img
          className="absolute top-[calc(50%_-_287.1px)] left-[calc(50%_-_216.65px)] w-[433px] h-[574px] object-cover z-[2]"
          alt=""
          src={iMAGE4}
          style={iMAGEIcon2Style}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div
          className="w-[149px] flex flex-col items-end justify-start"
          style={frameDiv5Style}
        >
          <h3 className="m-0 self-stretch relative text-inherit tracking-[0.4px] leading-[39px] font-normal font-inherit mq450:text-lg mq450:leading-[23px] mq800:text-5xl mq800:leading-[31px]">
            {johnTurner}
          </h3>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[11px] pl-3 mt-[-1px] text-xl text-burlywood font-outfit">
            <div
              className="flex-1 relative tracking-[0.4px] leading-[32px] inline-block min-w-[126px] mq450:text-base mq450:leading-[26px]"
              style={civilAttorneyStyle}
            >
              {civilAttorney}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandler;
