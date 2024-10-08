import Slider from "react-slick";
import menu1 from "../assets/compressed_menus/Menu 1.jpg";
import menu2 from "../assets/compressed_menus/Menu 2.jpg";
import menu3 from "../assets/compressed_menus/Menu 3.jpg";
import menu4 from "../assets/compressed_menus/Menu 4.jpg";
import menu5 from "../assets/compressed_menus/Menu 5.jpg";

const MenuSlider = () => {
  return (
    <Slider className="p-2 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] place-self-center">
      <figure>
        <img src={menu1} alt="cafe menu 1" className="rounded-xl shadow-lg" />
        <figcaption className="text-center font-cherry">
          Etherow Country Park café
        </figcaption>
      </figure>
      <figure>
        <img src={menu2} alt="cafe menu 2" className="rounded-xl shadow-lg" />
        <figcaption className="text-center font-cherry">
          Etherow Country Park café
        </figcaption>
      </figure>
      <figure>
        <img src={menu3} alt="cafe menu 3" className="rounded-xl shadow-lg" />
        <figcaption className="text-center font-cherry">
          The Potting Shed
        </figcaption>
      </figure>
      <figure>
        <img src={menu4} alt="cafe menu 4" className="rounded-xl shadow-lg" />
        <figcaption className="text-center font-cherry">
          The Potting Shed
        </figcaption>
      </figure>
      <figure>
        <img src={menu5} alt="cafe menu 5" className="rounded-xl shadow-lg" />
        <figcaption className="text-center font-cherry">
          The Potting Shed
        </figcaption>
      </figure>
    </Slider>
  );
};

export default MenuSlider;
