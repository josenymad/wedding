import TravelText from "./TravelText";
import TravelSlider from "./TravelSlider";

const Travel = () => {
  return (
    <section className="bg-green-900 min-h-screen text-white" id="travel">
      <div className="grid grid-cols-1 xs:grid-cols-2">
        <TravelText />
        <TravelSlider />
      </div>
    </section>
  );
};

export default Travel;
