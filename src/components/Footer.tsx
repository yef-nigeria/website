import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import Button from "./ui/Button";

const Footer = () => {
  return (
    <section className="bg-blue-400 bg-[url(/assets/images/footer-bg.png)] bg-blend-darken bg-repeat mt-32">
      <div className="container mx-auto py-14 text-white grid grid-cols-7 gap-6">
        <h3 className="text-2xl font-semibold col-span-7">
          Youth Empowerment Foundation
        </h3>
        <div className="col-start-5">
          <p className="text-xs">Quick Links</p>
        </div>
        <div className="col-start-6">
          <p className="text-xs">Subscribe to Newsletter</p>
        </div>
        <div className="space-y-6 col-span-2">
          <p>
            Empowering African youths to find expression and learn life-changing
            skills to give them a better future.
          </p>
          <p className="underline">Interested? Get Involved</p>
        </div>

        <div className="space-y-3 col-span-2">
          <div className="space-x-3">
            <p>48, Akerele Street, Surulere, 101241, Lagos, Nigeria</p>
          </div>
          <div className="space-x-3">
            <p>+234 809 111 1485</p>
          </div>
          <div className="space-x-3">
            <p>info@yefnigeria.org</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <Link href={"/about"}>About Us</Link>
            <Link href={"/team"}>Our Team</Link>
            <Link href={"/about/yef-history"}>History</Link>
            <Link href={"/get-in-touch"}>Get in Touch </Link>
          </div>
        </div>
        <div className="col-span-2 space-y-6">
          <Input type="email" placeholder="Enter your email address" />
          <Button className="bg-gray-600 hover:bg-blue-600 text-white rounded-xl px-4 py-2 text-sm">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
