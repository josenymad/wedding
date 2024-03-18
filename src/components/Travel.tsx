import TravelText from "./TravelText";
import TravelSlider from "./TravelSlider";

const Travel = () => {
  return (
    <section className="bg-green-900 min-h-screen text-white">
      <div className="grid grid-cols-2 justify-items-center">
        <TravelText />
        <TravelSlider />
      </div>
    </section>
  );
};

export default Travel;
