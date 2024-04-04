import OutputMerger from "./OutputMerger";
import ValueTransformer1 from "./ValueTransformer1";
import ValueTransformer from "./ValueTransformer";

const FrameComponent4 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[139.69999999999982px] box-border max-w-full text-center text-26xl text-white font-cormorant-garamond mq450:pb-[59px] mq450:box-border mq1125:pb-[91px] mq1125:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[60.30000000000018px] max-w-full mq450:gap-[15px_60.3px] mq800:gap-[30px_60.3px]">
        <OutputMerger
          clientOpinionsReviews={`Отзывы нащих клиентов`}
          iMAGE="/image-18.svg"
        />
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[10px] max-w-full text-left text-xl text-lightgray font-outfit">
          <ValueTransformer1
            couldYouPleaseThankPaulPe="Could you please thank Paul personally for me, the stars are for his forehead. The perfect way of handling the case based on the situation."
            iMAGE1="/image-28@2x.png"
            natasha="Natasha"
            privateEmployee="Private Employee"
          />
          <ValueTransformer
            iMAGE="/image-29@2x.png"
            hannahButler="Hannah Butler"
            businessSector="Business Sector"
            attorneyLawFirmReallyHelp="Attorney law firm really helped me with all my family law and custody issues at the right time. Words are not enough to thank the firm."
          />
          <ValueTransformer1
            couldYouPleaseThankPaulPe="Thank you for the way in which your team handling the matter on a perfect way. They give me a big relief in this case with more confident."
            iMAGE1="/image-32@2x.png"
            natasha="Phillip Arnold"
            privateEmployee="Bus Driver"
            propMinWidth="unset"
            propMinWidth1="97px"
          />
          <ValueTransformer
            iMAGE="/image-33@2x.png"
            hannahButler="Joshua Warren"
            businessSector="Private Engineer"
            attorneyLawFirmReallyHelp="I frequently check the Best Lawyers list to select an attorney in areas too familiar with at the end they came and lead to achive the justice."
            propHeight="416px"
            propHeight1="416px"
            propAlignSelf="unset"
            propWidth="212px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
