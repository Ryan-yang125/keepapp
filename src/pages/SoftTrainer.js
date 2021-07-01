import LineProgress from "../components/LineProgress";
import TimeCounter from "../components/TimeCounter";
import FaceCapturer from "../components/FaceCapturer";

export default function SoftTrainer() {
  return (
    <>
      <LineProgress progress={0} />
      <div>
        <TimeCounter />
      </div>
      <FaceCapturer />
    </>
  );
}
