"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <section className="text-xl space-y-32">
      <div className="bg-gray-200 bg-[url(/assets/images/hero-image.png)] bg-blend-multiply bg-cover h-[calc(80vh-2rem)] content-center">
        <h1 className="uppercase font-bold text-7xl text-center text-white container mx-auto">
          Our youth deserve better and we make that happen.
        </h1>
      </div>
      <div className="container mx-auto items-end space-y-16">
        <div className="flex gap-12">
          <div className="space-y-6 w-full">
            <p className="font-bold text-gray-400">About YEF</p>
            <p>
              Youth Empowerment Foundation &#40;YEF&#41; is a youth-focused,
              non-governmental, and non-profit organisation based in Nigeria.
            </p>
          </div>
          <div className="space-y-3 w-full font-bold">
            <p>Founded in 1995</p>
            <p>5,000+ young female apprentices since 2023</p>
          </div>
        </div>
        <div className="bg-gray-300 bg-[url(/assets/images/usaid-girls-cropped.jpg)] bg-blend-multiply bg-cover h-[calc(55vh-2rem)] bg-center rounded-2xl" />
      </div>

      <div className="container mx-auto items-end space-y-16">
        <div className="flex gap-12">
          <div className="space-y-6 w-full">
            <p className="font-bold text-gray-400">Our Projects</p>
            <p>
              We are committed to delivering high-quality programmes and
              services that empower Nigerian youth and help unlock their full
              potential.
            </p>
          </div>
          <div className="flex justify-between items-center p-3 border-t-[1px] border-gray-100 w-full hover:bg-gray-100 h-fit font-bold">
            View all our projects
            <ArrowRightIcon size={24} />
          </div>
        </div>
        <div className="flex justify-between gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-gray-100 h-96 w-full rounded-2xl"
              title={`card ${item}`}
            />
          ))}
        </div>
      </div>
      <div className="bg-blue-500 text-white py-32">
        <div className="container mx-auto space-y-16">
          <div className="flex gap-12">
            <div className="space-y-6 w-full">
              <p className="font-bold text-gray-100">Our Impact</p>
              <p>
                Over its 30-year history, YEF has led numerous initiatives to
                empower youth with skills, knowledge, and opportunities to lead
                healthy, productive, and purpose-driven lives
              </p>
            </div>
            <div className="space-y-3 p-3 border-t-[1px] border-gray-100/10 w-full hover:bg-gray-100 h-fit font-bold">
              Learn more about the YEF Impact
            </div>
            {/* TODO: Install Phosphor Icons */}
          </div>
          <div className="flex justify-between gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 h-96 w-full rounded-2xl"
                title={`card ${item}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
