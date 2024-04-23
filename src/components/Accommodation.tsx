import accommodation from "../assets/accommodationCompressed.jpg";

const Accommodation = () => {
  return (
    <section
      className="bg-orange-700 min-h-screen text-white"
      id="accommodation"
    >
      <div className="grid grid-cols-1 xs:grid-cols-2">
        <hgroup className="p-2">
          <h2 className="text-[9vw] font-berkshire mb-4 ml-2">Accommodation</h2>
          <ul className="font-cherry text-lg max-w-[85vw]">
            <li>
              <p className="mb-4">
                You are welcome to camp on site and we'd love it if you did!
              </p>
            </li>
            <li>
              <p className="mb-4">
                Camper-vans/caravans are also welcome, but there are no
                electrical hookups. Glamping options are available too.
              </p>
            </li>
            <li>
              <p className="mb-4">
                In addition, the venue has recommended some local accommodation
                options below:
              </p>
            </li>
            <li>
              <p className="font-bold">Local Airbnbs</p>
            </li>
            <li>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <a
                    href="https://www.airbnb.co.uk/rooms/1018453180441302660?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-02-18&check_out=2024-02-23&source_impression_id=p3_1706885345_4u0UjYZkAolAlZUK&previous_page_section_name=1000&federated_search_id=6233f2ed-439f-4fda-b00b-8f617d3688f4"
                    className="underline"
                    target="_blank"
                  >
                    Ramblers Retreat,
                  </a>{" "}
                  Compstall
                </li>
                <li>
                  <a
                    href="https://www.sykescottages.co.uk/cottage/Peak-District-Cheshire-Benfield/The-Barn-1065748.html"
                    className="underline"
                    target="_blank"
                  >
                    The Barn,
                  </a>{" "}
                  Compstall
                </li>
                <li>
                  <a
                    href="https://www.airbnb.co.uk/rooms/52981886?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-02-04&check_out=2024-02-09&source_impression_id=p3_1706885357_eT2JJ8txpx66FW%2BQ&previous_page_section_name=1000&federated_search_id=6233f2ed-439f-4fda-b00b-8f617d3688f4"
                    className="underline"
                    target="_blank"
                  >
                    Barn in Romiley
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.airbnb.co.uk/rooms/862040479275834229?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-02-05&check_out=2024-02-10&source_impression_id=p3_1706885345_GfseJOrXPX1lkvum&previous_page_section_name=1000&federated_search_id=6233f2ed-439f-4fda-b00b-8f617d3688f4"
                    className="underline"
                    target="_blank"
                  >
                    Hollins Cottage
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.airbnb.co.uk/rooms/38145762?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-02-05&check_out=2024-02-10&source_impression_id=p3_1706885345_2Q3oOhCx4cYnjVHL&previous_page_section_name=1000&federated_search_id=6233f2ed-439f-4fda-b00b-8f617d3688f4"
                    className="underline"
                    target="_blank"
                  >
                    Town Street Apartment
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p className="font-bold">Local hotels</p>
            </li>
            <li>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <a
                    href="https://www.premierinn.com/gb/en/hotels/england/greater-manchester/manchester/manchester-tameside-hyde.html?cid=GLBC_MANOUT"
                    className="underline"
                    target="_blank"
                  >
                    Premier Inn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.village-hotels.co.uk/manchester-hyde"
                    className="underline"
                    target="_blank"
                  >
                    Village Hotel
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ihg.com/holidayinnexpress/hotels/gb/en/stockport/xvasr/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-GB-_-XVASR"
                    className="underline"
                    target="_blank"
                  >
                    Holiday Inn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.travelodge.co.uk/hotels/550/Glossop-hotel?utm_source=google&utm_medium=GHA_Organic&utm_campaign=GHA_Glossop&WT.tsrc=GHA_Organic"
                    className="underline"
                    target="_blank"
                  >
                    Travel Lodge
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </hgroup>
        <div className="p-2 place-self-center">
          <img
            src={accommodation}
            alt="Ben and Neva"
            className="rounded-xl md:w-[37vw] lg:w-[30vw] lg:mt-[12vw] lg:mr-[3vw] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
