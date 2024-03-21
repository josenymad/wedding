import faqs from "../assets/faqsCompressed.jpg";

interface FAQsProps {
  reference: (node?: Element | null | undefined) => void;
}

const FAQs: React.FC<FAQsProps> = ({ reference }) => {
  return (
    <section
      className="bg-amber-400 min-h-screen text-black"
      id="faqs"
      ref={reference}
    >
      <div className="grid grid-cols-1 xs:grid-cols-2">
        <hgroup className="p-2">
          <h2 className="text-[9vw] font-berkshire mb-4">FAQs</h2>
          <ul className="font-cherry text-lg">
            <li className="mb-4">
              <p className="font-bold">How do I RSVP?</p>
              <p>
                Please click{" "}
                <a href="#rsvp" className="underline">
                  here
                </a>{" "}
                and then select if you'll be attending the ceremony or the
                evening reception; you'll then be presented with a little more
                info, as well as an online form to RSVP.
              </p>
            </li>
            <li className="mb-4">
              <p className="font-bold">Is there parking at the venue?</p>
              <p>
                Yep, parking is available. You are welcome to park your car
                overnight, get a taxi home and pick your car up the next day.
              </p>
            </li>
            <li className="mb-4">
              <p className="font-bold">Is there a dress code?</p>
              <p>
                Nope, wear whatever makes you feel good! Elements of the
                day/night will take place outside and on grass though, and the
                main venue is a cow shed, so wear suitable shoes and bring
                plenty of layers! If you want to avoid looking like one of
                Neva's (many) bridesmaids, steer clear of burnt orange.
              </p>
            </li>
            <li className="mb-4">
              <p className="font-bold">Can I bring my own booze?</p>
              <p>
                The venue has requested that no alcohol be brought onto site on
                the day of the wedding as they are a fully licensed premises and
                under strict licence by Stockport Metropolitan Borough Council.
              </p>
            </li>
            <li>
              <p className="font-bold">Do you have a gift registry?</p>
              <p>
                Your presence at our wedding is gift enough, but, should you
                wish to give a gift as well, money to put towards our honeymoon
                would be greatly appreciated.
              </p>
            </li>
          </ul>
        </hgroup>
        <div className="p-2 place-self-center">
          <img
            src={faqs}
            alt="Ben and Neva"
            className="rounded-xl lg:w-[33vw] lg:mr-[7vw] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
