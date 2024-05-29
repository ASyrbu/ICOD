import LogicBranch from "../components/LogicBranch";
import MergerStation from "../components/Welcome";
import Frame2 from "../components/Services";
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
      <Frame2 />
      <FrameComponent5 />
      <FrameComponent3 />
      <LinkedList />
      <FrameComponent2 />
      <TransformerNetwork />

    </div>
  );
};

export default Desktop;
