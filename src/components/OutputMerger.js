import { useMemo } from "react";

const OutputMerger = ({
  clientOpinionsReviews,
  iMAGE,
  propWidth,
  propAlignSelf,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const functionLinkerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-26xl text-white font-cormorant-garamond">
      <div
        className="w-[500px] flex flex-col items-end justify-start gap-[11px] max-w-full"
        style={frameDiv4Style}
      >
        <h1 className="m-0 self-stretch relative text-inherit tracking-[0.4px] leading-[54px] font-normal font-inherit mq450:text-8xl mq450:leading-[32px] mq800:text-17xl mq800:leading-[43px]">
          {clientOpinionsReviews}
        </h1>
        <div
          className="self-stretch h-11 flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border"
          style={functionLinkerStyle}
        >
          <img
            className="h-11 w-[95px] relative overflow-hidden shrink-0"
            alt=""
            src={iMAGE}
          />
        </div>
      </div>
    </div>
  );
};

export default OutputMerger;
