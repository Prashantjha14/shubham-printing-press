import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <nav className="mr-5">
        <ul className="flex justify-center h-full items-center p-0 gap-5 flex-wrap">
          <li>
            <Link
              href="/services"
              className="hover:text-red-400 hover:underline transition-all duration-100 ease-in"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="hover:text-red-400 hover:underline transition-all duration-100 ease-in"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="hover:text-red-400 hover:underline transition-all duration-100 ease-in"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
