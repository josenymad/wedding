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
      <div className="grid grid-cols-2">
        <hgroup className="p-2">
          <h2 className="text-7xl font-berkshire mb-8">FAQs</h2>
        </hgroup>
        <img
          src={faqs}
          alt="Ben and Neva"
          className="w-3/5 mt-16 ml-16 rounded-xl"
        />
      </div>
    </section>
  );
};

export default FAQs;
