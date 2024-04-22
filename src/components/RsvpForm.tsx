const RsvpForm = ({ formLink }: { formLink: string }) => {
  return (
    <div className="font-cherry text-xl p-2">
      <p>
        Please RSVP via{" "}
        <a href={formLink} className="underline" target="_blank">
          this
        </a>{" "}
        form by the 30th of June.
      </p>
    </div>
  );
};

export default RsvpForm;
