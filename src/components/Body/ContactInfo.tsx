import Link from "next/link";

const ContactInfo = () => {
  return (
    <section>
      <div className="text-center flex flex-col gap-3 md:flex-row md:items-start justify-center items-center">
        <div className="max-w-96">
          <h2 className="text-3xl">Location</h2>
          <p className="desc">
            D - 29, DSIDC Industrial Area, Udyog Nagar, Near Udyog Nagar Metro
            Station, Delhi - 110087
          </p>
        </div>
        <div className="max-w-96">
          <h2 className="text-3xl">GST INFO</h2>
          <p className="desc">
            Shubham Enterprise <br />
            IDBI BANK <br />
            0163102000036926 <br />
            IBKL0000163 <br />
            GST NO - 07ARGPJ0988B2ZV
          </p>
        </div>
        <div className="max-w-96">
          <h2 className="text-3xl">Call</h2>
          <p className="desc">
            <Link href="tel:+919136123478">+91 9136123478</Link>
            <br />
            <Link href="tel:+919312102066">+91 9312102066</Link>
          </p>
        </div>
      </div>

      <div className="Map"></div>
    </section>
  );
};

export default ContactInfo;
