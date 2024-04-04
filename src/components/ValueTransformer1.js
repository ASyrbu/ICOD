import { useMemo } from "react";

const ValueTransformer1 = ({
  couldYouPleaseThankPaulPe,
  iMAGE1,
  natasha,
  privateEmployee,
  propMinWidth,
  propMinWidth1,
}) => {
  const natashaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const privateEmployeeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-[39.69999999999982px] pb-[65.30000000000018px] pr-[9.5px] pl-2.5 box-border gap-[20px] min-w-[251px] max-w-full text-left text-xl text-lightgray font-outfit mq800:pt-[26px] mq800:pb-[42px] mq800:box-border">
      <div className="self-stretch h-[391px] rounded-t-12xs rounded-br-12xs rounded-bl-21xl bg-darkslategray-300 flex flex-col items-start justify-start pt-[51px] px-[45px] pb-[57px] box-border gap-[33px] mq450:gap-[16px_33px] mq450:pt-[33px] mq450:px-5 mq450:pb-[37px] mq450:box-border">
        <div className="w-[313px] h-[391px] relative rounded-t-12xs rounded-br-12xs rounded-bl-21xl bg-darkslategray-300 hidden" />
        <img
          className="w-8 h-[26px] relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/image-27.svg"
        />
        <div className="w-[217px] relative tracking-[0.4px] leading-[32px] inline-block z-[1] mq450:text-base mq450:leading-[26px]">
          {couldYouPleaseThankPaulPe}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[22px] text-11xl text-white font-cormorant-garamond">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[84px] w-[84px] relative">
          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-81xl h-full" />
          <img
            className="absolute w-full top-[calc(50%_-_42px)] right-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden h-[83px] object-cover z-[1]"
            alt=""
            src={iMAGE1}
          />
        </button>
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <div className="flex flex-col items-start justify-start">
            <div className="h-[38px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
              <h3
                className="mb-[-1px] m-0 relative text-inherit tracking-[0.4px] leading-[39px] font-normal font-inherit inline-block min-w-[98px] shrink-0 [debug_commit:f6aba90] mq450:text-lg mq450:leading-[23px] mq800:text-5xl mq800:leading-[31px]"
                style={natashaStyle}
              >
                {natasha}
              </h3>
            </div>
            <div
              className="relative text-xl tracking-[0.4px] leading-[32px] font-outfit text-lightgray shrink-0 [debug_commit:f6aba90] mq450:text-base mq450:leading-[26px]"
              style={privateEmployeeStyle}
            >
              {privateEmployee}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueTransformer1;
