import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav>
      <div className="flex flex-col sm:flex-row justify-evenly sm:justify-evenly sm:px-20 sm:items-center py-2 sm:py-8 bg-[#3F4CE0] text-white ">
        <div className="flex justify-center items-center">
          <Image
            src={
              "https://cdn.statically.io/gh/afkcodes/megbytdev-web/main/public/whiteLogo.png"
            }
            width={50}
            height={40}
            alt="Megabyt logo"
          />
        </div>
        <div>
          <ul className="flex flex-row sm:space-x-12 lg:space-x-14 justify-evenly text-center font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#products">Our Products</Link>
            </li>
            <li>
              <Link href="#story">Our Story</Link>
            </li>
            <li>
              <Link href="#contacts">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
