import Slider from "react-slick";
import one from "../assets/compressed_directions/1 - Enter the park here from Montague street-min.jpg";
import two from "../assets/compressed_directions/2 - Continue through the park-min.jpg";
import three from "../assets/compressed_directions/3 - Bear right at the cottages-min.jpg";
import four from "../assets/compressed_directions/4 - Go over the bridge past the waterfall-min.jpg";
import five from "../assets/compressed_directions/5 - Turn left after the bridge-min.jpg";
import six from "../assets/compressed_directions/6 - Go through the gate-min.jpg";
import seven from "../assets/compressed_directions/7 - Continue into the farm-min.jpg";

const TravelSlider = () => {
  return (
    <div className="w-[80vw] xs:w-[30vw] xl:w-[25vw] p-2 place-self-center">
      <Slider>
        <figure>
          <img
            src={one}
            alt="Enter the park here from Montague street"
            className="rounded-xl"
          />
          <figcaption className="text-center font-cherry">
            1. Enter the park here from Montague street
          </figcaption>
        </figure>

        <figure>
          <img
            src={two}
            alt="Continue through the park"
            className="rounded-xl"
          />
          <figcaption className="text-center font-cherry">
            2. Continue through the park
          </figcaption>
        </figure>

        <figure>
          <img
            src={three}
            alt="Bear right at the cottages"
            className="rounded-xl"
          />
          <figcaption className="text-center font-cherry">
            3. Bear right at the cottages
          </figcaption>
        </figure>

        <figure>
          <img
            src={four}
            alt="Go over the bridge past the waterfall"
            className="rounded-xl"
          />
          <figcaption className="text-center font-cherry">
            4. Go over the bridge past the waterfall
          </figcaption>
        </figure>

        <figure>
          <img
            src={five}
            alt="Turn left after the bridge"
            className="rounded-xl"
          />
          <figcaption className="text-center font-cherry">
            5. Turn left after the bridge
          </figcaption>
        </figure>

        <figure>
          <img src={six} alt="Go through the gate" className="rounded-xl" />
          <figcaption className="text-center font-cherry">
            6. Go through the gate
          </figcaption>
        </figure>

        <figure>
          <img
            src={seven}
            alt="Continue into the farm"
            className="rounded-xl"
          />
          <figcaption className="text-center font-cherry">
            7. Continue into the farm
          </figcaption>
        </figure>
      </Slider>
    </div>
  );
};

export default TravelSlider;
