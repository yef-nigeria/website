import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <section className="bg-blue-500 bg-[url(/assets/images/footer-bg.png)] bg-blend-darken bg-repeat mt-16 md:mt-24 lg:mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 text-white grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-6">
        <h3 className="text-lg font-semibold uppercase font-sat col-span-1 lg:col-span-7 order-1">
          Youth Empowerment Foundation
        </h3>

        <div className="space-y-4 sm:space-y-6 col-span-1 lg:col-span-2 order-2">
          <p className="text-sm  text-white/70">
            Empowering African youths to find expression and learn life-changing
            skills to give them a better future.
          </p>
          <p className="underline text-sm sm:text-base">
            Interested? Get Involved
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3 col-span-1 lg:col-span-2 order-3">
          <p className="text-sm sm:text-base">
            43, Akerele Street, Surulere, 101241, Lagos, Nigeria
          </p>
          <Link
            href="tel:+2348091111485"
            className="block text-sm sm:text-base hover:underline"
          >
            +234 809 111 1485
          </Link>
          <Link
            href="mailto:info@yefnigeria.org"
            className="block text-sm sm:text-base hover:underline"
          >
            info@yefnigeria.org
          </Link>
        </div>

        <div className="col-span-1 lg:col-start-5 order-4">
          <p className="text-xs font-medium text-white/70 mb-3 sm:mb-0">
            Quick Links
          </p>
          <div className="flex flex-col gap-2 sm:gap-3 mt-2">
            <Link
              href="/about/who-we-are"
              className="text-sm sm:text-base hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/about/who-we-are#team"
              className="text-sm sm:text-base hover:underline"
            >
              Our Team
            </Link>
            <Link
              href="/about/who-we-are#history"
              className="text-sm sm:text-base hover:underline"
            >
              History
            </Link>
            <Link
              href="/get-in-touch"
              className="text-sm sm:text-base hover:underline"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="col-span-1 lg:col-start-6 lg:col-span-2 space-y-4 sm:space-y-6 order-5">
          <p className="text-xs font-medium text-white/70">
            Subscribe to Newsletter
          </p>
          <Input
            type="email"
            placeholder="Enter your email address"
            className="w-full text-sm bg-white/10 border-white/30 placeholder:text-white/70 text-white"
          />
          <Button className="w-full sm:w-auto">Subscribe</Button>
        </div>
      </div>
      <p className="text-center text-sm text-white/70 pb-8">
        &copy; {new Date().getFullYear()} Youth Empowerment Foundation. All
        rights reserved.{" "}
      </p>
    </section>
  );
};

export default Footer;
