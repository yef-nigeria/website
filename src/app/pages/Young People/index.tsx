import Button from "@/components/ui/Button";
import React from "react";

const YoungPeople = () => {
  return (
    <div className="space-y-32">
      <section className="container mx-auto mt-32 space-y-16">
        <h3 className="text-blue-500 text-6xl font-semibold max-w-4xl leading-tight">
          We believe in you—and we&apos;re here to help you believe in yourself.
        </h3>
        <div className="bg-gray-300 bg-[url(/assets/images/usaid-girls-cropped.jpg)] bg-blend-multiply bg-cover h-[calc(55vh-2rem)] bg-center rounded-2xl" />
      </section>
      <section className="container mx-auto grid grid-cols-12 gap-12">
        <div className="space-y-8 col-span-7">
          <div className="space-y-6 w-full">
            <p className="font-bold text-gray-400">How do we help?</p>
            <p className="md:max-w-xl">
              At YEF, we give you opportunities to try lots of different
              activities, get stuck, discover what you are passionate about and
              realize your full potential.
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-col col-span-5 h-44">
          {["We listen to you", "We plan with you", "We take care of you"].map(
            (value, i) => (
              <div key={i} className={"text-2xl font-semibold text-blue-600"}>
                {value}
              </div>
            )
          )}
        </div>
      </section>
      <section className="py-16 border-t border-b border-gray-100">
        <div className="container mx-auto">
          <p className="font-cab text-5xl leading-tight font-semibold text-blue-600">
            Every child without exception has the power to become who they
            aspire to be, not who they are told to be.
          </p>
        </div>
      </section>
      <section className="container mx-auto grid grid-cols-12 gap-12">
        <div className="space-y-8 col-span-full">
          <div className="space-y-6 w-full">
            <p className="font-bold text-gray-400">
              Testimonials from some of our beneficiaries
            </p>
          </div>
        </div>
        <div className="space-y-8 col-span-4 bg-brown-100 p-5">
          <div className="flex items-center gap-4">
            <div className="bg-gray-600 rounded-full h-12 w-12" />
            <span className="font-cab text-xl text-brown-500 font-semibold">
              Idiah Jah&apos;swill
            </span>
          </div>
          <p>
            With gladness and a heart filled with appreciation, I say thank You
            YEF and #FCMB for making my life more interesting and most
            importantly adding value to it.  Looking back, I can only smile with
            joy in my heart, knowing the decision I took to join the empowerment
            training program to master my chosen vocation (tailoring) was not in
            vain.  Now, I am confident that I have learned so well to stand out
            amongst millions out there.
          </p>
        </div>
        <div className="space-y-8 col-span-4 bg-blue-100 p-5">
          <div className="flex items-center gap-4">
            <div className="bg-gray-600 rounded-full h-12 w-12" />
            <span className="font-cab text-xl text-blue-500 font-semibold">
              Idiah Jah&apos;swill
            </span>
          </div>
          <p>
            With gladness and a heart filled with appreciation, I say thank You
            YEF and #FCMB for making my life more interesting and most
            importantly adding value to it.  Looking back, I can only smile with
            joy in my heart, knowing the decision I took to join the empowerment
            training program to master my chosen vocation (tailoring) was not in
            vain.  Now, I am confident that I have learned so well to stand out
            amongst millions out there.
          </p>
        </div>
        <div className="space-y-8 col-span-4 bg-brown-100 p-5">
          <div className="flex items-center gap-4">
            <div className="bg-gray-600 rounded-full h-12 w-12" />
            <span className="font-cab text-xl text-brown-500 font-semibold">
              Idiah Jah&apos;swill
            </span>
          </div>
          <p>
            With gladness and a heart filled with appreciation, I say thank You
            YEF and #FCMB for making my life more interesting and most
            importantly adding value to it.  Looking back, I can only smile with
            joy in my heart, knowing the decision I took to join the empowerment
            training program to master my chosen vocation (tailoring) was not in
            vain.  Now, I am confident that I have learned so well to stand out
            amongst millions out there.
          </p>
        </div>
      </section>
      <div className="container mx-auto leading-tight text-center space-y-5">
        <p className="font-bold text-2xl">
          Come along and be a part of us!
        </p>
        <Button className="bg-gray-600 hover:bg-blue-600 text-white rounded-xl px-6 py-3">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default YoungPeople;
