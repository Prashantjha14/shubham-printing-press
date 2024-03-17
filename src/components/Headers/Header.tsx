import Image from "next/image";

import NavBar from "./NavBar";
import Link from "next/link";

// flex sm:flex-col sm:flex justify-between sm:items-center sm:justify-center

const Header = () => {
  return (
    <header className="sticky top-0 p-5 z-50 flex-col flex sm:flex-row sm:justify-between items-center backdrop-blur-sm">
      <Link href="/">
        <Image
          src="/images/logos/LOGO.jpg"
          alt="logo"
          width={200}
          height={50}
          className="h-16 max-w-sm rounded-lg"
        />
      </Link>
      <NavBar></NavBar>
    </header>
  );
};

export default Header;
