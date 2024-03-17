import Link from "next/link";

const CurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const currentYear = CurrentYear();
  return (
    <>
      <footer>
        <section className="flex flex-col sm:gap-0 gap-3 md:w-3/5 mx-auto p-3 sm:justify-between sm:flex-row">
          <div className="">
            <h2 className="text-4xl">Shubham Enterprise</h2>
            <h3>GST NO - 07ARGPJ0988B2ZV</h3>
            <h3>
              Phone:{" "}
              <Link href="" className="underline hover:text-red-500">
                +91 9136123478
              </Link>
            </h3>
          </div>
          <div className="">
            <ul className="text-center text-end">
              <li>Links</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </section>
        <div className="text-center border-t-2">
          <p className="desc">
            &copy; {currentYear} Shubham Printing Press Inc.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
