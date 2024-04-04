import { useMemo } from "react";

const FrameComponent1 = ({
  utilityPages,
  styleGuide,
  licenses,
  protected1,
  changelog,
  errorPage,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
}) => {
  const styleGuideStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const licensesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const protectedStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const changelogStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className="w-[184.4px] flex flex-col items-start justify-start gap-[20px] text-left text-xl text-lightgray font-outfit">
      <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[19px] gap-[0.5px] text-11xl text-white font-cormorant-garamond">
        <div className="self-stretch h-px relative bg-darkslategray-200" />
        <div className="self-stretch h-[81px] flex flex-col items-start justify-start py-[21px] px-0 box-border relative gap-[20.5px] z-[1]">
          <div className="relative tracking-[0.4px] leading-[39px] z-[1] mq450:text-lg mq450:leading-[23px] mq800:text-5xl mq800:leading-[31px]">
            {utilityPages}
          </div>
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]" />
          <div className="self-stretch h-px relative bg-darkslategray-200" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[20px]">
        <div
          className="relative tracking-[0.4px] leading-[32px] capitalize inline-block min-w-[108px] mq450:text-base mq450:leading-[26px]"
          style={styleGuideStyle}
        >
          {styleGuide}
        </div>
        <div
          className="relative tracking-[0.4px] leading-[32px] capitalize inline-block min-w-[81px] mq450:text-base mq450:leading-[26px]"
          style={licensesStyle}
        >
          {licenses}
        </div>
      </div>
      <div
        className="relative tracking-[0.4px] leading-[32px] capitalize inline-block min-w-[98px] mq450:text-base mq450:leading-[26px]"
        style={protectedStyle}
      >
        {protected1}
      </div>
      <div
        className="relative tracking-[0.4px] leading-[32px] capitalize inline-block min-w-[104px] mq450:text-base mq450:leading-[26px]"
        style={changelogStyle}
      >
        {changelog}
      </div>
      <div className="relative tracking-[0.4px] leading-[32px] capitalize inline-block min-w-[103px] mq450:text-base mq450:leading-[26px]">
        {errorPage}
      </div>
    </div>
  );
};

export default FrameComponent1;
