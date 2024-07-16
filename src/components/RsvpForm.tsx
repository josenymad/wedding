const RsvpForm = ({ formLink }: { formLink: string }) => {
  return (
    <div className="font-cherry text-xl p-2">
      <p>
        Please RSVP by filling in{" "}
        <a href={formLink} className="underline" target="_blank">
          this
        </a>{" "}
        form.
      </p>
    </div>
  );
};

export default RsvpForm;
