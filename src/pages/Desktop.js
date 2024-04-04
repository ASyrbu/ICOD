import LogicBranch from "../components/LogicBranch";
import MergerStation from "../components/Welcome";
import FrameComponent7 from "../components/FrameComponent7";
import Frame2 from "../components/Services2";
import FrameComponent5 from "../components/FrameComponent5";
import LinkedList from "../components/LinkedList";
import FrameComponent3 from "../components/Contacts";
import FrameComponent2 from "../components/Consulting";
import TransformerNetwork from "../components/Footer";

const Desktop = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden  pb-[110px] ">
      <LogicBranch />
      <MergerStation />
      <section className="self-stretch bg-gray-400 flex flex-col items-start justify-start pt-[130px] px-[30px] pb-[109.69999999999982px] box-border gap-[60.30000000000018px] max-w-full mq450:gap-[15px_60.3px] mq800:gap-[30px_60.3px] mq800:pt-[55px] mq800:pb-[46px] mq800:box-border mq1350:pt-[84px] mq1350:pb-[71px] mq1350:box-border">
        <div className="w-[1440px] h-[1390px] relative bg-gray-400 hidden max-w-full" />
        <FrameComponent7 />
        <Frame2 />
      </section>
      <section className="self-stretch h-[713px] bg-white flex flex-col items-end justify-start pt-[124px] px-10 pb-[322px] box-border gap-[60px] max-w-full z-[2] mq800:gap-[30px_60px] mq800:pt-[53px] mq800:pb-[136px] mq800:box-border mq1125:pt-[81px] mq1125:pb-[209px] mq1125:box-border mq1350:h-auto">
        <div className="w-[1440px] h-[713px] relative bg-white hidden max-w-full" />
        <FrameComponent5 />
      </section>
      <FrameComponent3 />
      <LinkedList />
      <FrameComponent2 />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[84.5px] max-w-full mq450:gap-[21px_84.5px] mq800:gap-[42px_84.5px]">
          <div className="self-stretch h-[88.5px] flex flex-row items-start justify-start pt-0 px-0 pb-[9.5px] box-border max-w-full">
            <div className="h-[79px] flex-1 relative flex items-center justify-center">
            </div>
          </div>
          <TransformerNetwork />
        </div>
      </section>
    </div>
  );
};

export default Desktop;
<img
  className="h-full flex-1 max-w-full overflow-hidden object-contain absolute left-[20px] top-[0px] w-full [transform:scale(1.029)]"
  alt=""
  src="/frame-1.svg"
/>