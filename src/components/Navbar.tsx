import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./common/Button";

const Navbar = () => {
  return (
    <section className="bg-blue-500 py-2 text-white">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/yef-logo-white.png"
            alt="yef-logo"
            width={80}
            height={80}
          />
          <h6 className="font-medium">Youth Empowerment Foundation</h6>
        </div>

        <div className="flex gap-10 capitalize text-center items-center">
          <Link href="/about">About</Link>
          <Link href="/about">Young People</Link>
          <Link href="/about">Contact Us</Link>
          <Link href="/about" className="font-cab font-medium normal-case">
            the YEF blog
          </Link>
          <Button
            as="a"
            href="https://give-usa.keela.co/youth-empowerment-foundation-donate-page"
            target="_blank"
            className="bg-gray-600 hover:bg-blue-600 text-white rounded-xl px-6 py-3"
          >
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
