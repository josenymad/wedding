import MenuSlider from "../MenuSlider";

const EveningCamping = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 p-2">
      <div className="font-cherry text-lg max-w-[90vw]">
        <p className="mb-4">
          You can camp onsite on Saturday night. If you are, you are welcome to
          arrive from 6:30pm to get setup. Tents and campervans/caravans are
          welcome (though there are no electric hookups) and there are also bell
          tents available to book - get in touch for more information.
        </p>
        <p className="mb-4">
          There are two cafes in Etherow Country Park, so you will be able to
          get breakfast on Sunday morning. Etherow Country Park café and The
          Potting Shed are a beautiful 15/20 minute walk from Whitebottom Farm.
        </p>
        <p className="mb-4">
          There is a drinking water tap on site. There will be plenty of showers
          too, but note that they will only be running at limited times on
          Sunday morning (TBC). No fires or BBQs on the grass please.
        </p>
      </div>
      <MenuSlider />
    </div>
  );
};

export default EveningCamping;
