import { useMemo } from "react";

const ValueTransformer = ({
  iMAGE,
  hannahButler,
  businessSector,
  attorneyLawFirmReallyHelp,
  propHeight,
  propHeight1,
  propAlignSelf,
  propWidth,
}) => {
  const frame2Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const rectangleStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const attorneyLawFirmStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-[39.69999999999982px] pb-[72.30000000000018px] pr-[9px] pl-[10.5px] box-border gap-[20px] min-w-[251px] max-w-full text-left text-11xl text-white font-cormorant-garamond mq800:pt-[26px] mq800:pb-[47px] mq800:box-border">
      <div className="flex flex-row items-start justify-start gap-[22px] mq450:flex-wrap">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[84px] w-[84px] relative">
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-81xl h-full" />
          <img
            className="absolute w-full top-[calc(50%_-_42px)] right-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden h-[82px] object-cover z-[1]"
            alt=""
            src={iMAGE}
          />
        </button>
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <div className="flex flex-col items-start justify-start">
            <div className="h-[38px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
              <h3 className="mb-[-1px] m-0 relative text-inherit tracking-[0.4px] leading-[39px] font-normal font-inherit shrink-0 [debug_commit:f6aba90] mq450:text-lg mq450:leading-[23px] mq800:text-5xl mq800:leading-[31px]">
                {hannahButler}
              </h3>
            </div>
            <div className="relative text-xl tracking-[0.4px] leading-[32px] font-outfit text-lightgray shrink-0 [debug_commit:f6aba90] mq450:text-base mq450:leading-[26px]">
              {businessSector}
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch h-96 rounded-tl-21xl rounded-tr-12xs rounded-b-12xs bg-darkslategray-300 flex flex-col items-start justify-start pt-[76px] px-[45px] pb-[57px] box-border gap-[33px] text-xl text-lightgray font-outfit mq450:gap-[16px_33px] mq450:pt-[49px] mq450:px-5 mq450:pb-[37px] mq450:box-border"
        style={frame2Style}
      >
        <div
          className="w-[313px] h-96 relative rounded-tl-21xl rounded-tr-12xs rounded-b-12xs bg-darkslategray-300 hidden"
          style={rectangleStyle}
        />
        <img
          className="w-8 h-[26px] relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/image-27.svg"
        />
        <div
          className="self-stretch relative tracking-[0.4px] leading-[32px] z-[1] mq450:text-base mq450:leading-[26px]"
          style={attorneyLawFirmStyle}
        >
          {attorneyLawFirmReallyHelp}
        </div>
      </div>
    </div>
  );
};

export default ValueTransformer;
