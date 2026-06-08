"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SPONSOR_NAME, PRESS_NAME, PROJECTS } from "@/utils/constants";

export function Home() {
  return (
    <section className="space-y-16 md:space-y-24 lg:space-y-32">
      <div className="bg-gray-200 bg-[url(/assets/images/hero-image.png)] bg-blend-multiply bg-cover min-h-[70vh] lg:h-[calc(80vh-2rem)] flex items-center content-center px-4 py-12">
        <h1 className="font-bold text-5xl lg:text-7xl sm:text-center text-white container mx-auto leading-tight">
          African youth deserve better and we make that happen.
        </h1>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 items-end space-y-10 md:space-y-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="space-y-4 md:space-y-6 w-full">
            <p className="font-bold text-gray-400">About YEF</p>
            <p className="text-sm sm:text-base">
              Youth Empowerment Foundation &#40;YEF&#41; is a youth-focused,
              non-governmental, and non-profit organisation based in Africa.
            </p>
          </div>
          <div className="space-y-3 w-full font-bold text-sm sm:text-base">
            <p>Founded in 1995</p>
            <p>5,000+ young female apprentices since 2023</p>
          </div>
        </div>
        <div className="bg-gray-300 bg-[url(/assets/images/usaid-girls-cropped.jpg)] bg-blend-multiply bg-cover min-h-[40vh] md:min-h-[45vh] lg:h-[calc(55vh-2rem)] bg-center rounded-xl md:rounded-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 items-end space-y-10 md:space-y-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="space-y-4 md:space-y-6 w-full">
            <p className="font-bold text-gray-400">Our Projects</p>
            <p>
              We are committed to delivering high-quality programmes and
              services that empower African youth and help unlock their full
              potential.
            </p>
          </div>
          <div className="flex justify-between items-center p-3 border-t border-gray-100 w-full hover:bg-gray-100 h-fit font-bold">
            View all our projects
            <ArrowRight strokeWidth={1.25} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(({ title, focus }, i) => (
            <div className="w-full space-y-2" key={i}>
              <div className="h-40 sm:h-52 w-full rounded-md bg-brown-500 p-6 flex hover:rotate-3 transition-all" />
              <p className="border border-brown-500 p-2 w-fit text-xs text-brown-500 rounded">
                {focus}
              </p>
              <p className="font-cab text-lg sm:text-xl font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-500 text-white py-32">
        <div className="container px-4 sm:px-6 mx-auto space-y-32">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="space-y-6 w-full">
              <p className="font-bold text-gray-100">Our Impact</p>
              <p>
                Over its 30-year history, YEF has led numerous initiatives to
                empower youth with skills, knowledge, and opportunities to lead
                healthy, productive, and purpose-driven lives.
              </p>
            </div>

            <Link
              href={"about/yef-impact"}
              className="flex justify-between items-center p-3 border-t border-gray-100/10 w-full hover:bg-gray-100/10 transition-all h-fit font-bold"
            >
              Learn more about the YEF Impact <ArrowRight strokeWidth={1.25} />
            </Link>
          </div>
          <div className="space-y-10 md:space-y-14">
            <p className="font-cab text-xl sm:text-2xl md:text-4xl font-semibold">
              Every child{" "}
              <span className="text-blue-100"> without exception</span> has the
              power to become who they aspire to be, not who they are told to
              be.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
              <div className="space-y-2 md:space-y-3">
                <p className="text-xs sm:text-sm">Workshops Conducted</p>
                <p className="font-cab text-2xl sm:text-3xl md:text-4xl font-semibold">
                  2,000+
                </p>
              </div>
              <div className="space-y-2 md:space-y-3">
                <p className="text-xs sm:text-sm">Young Female Apprentices</p>
                <p className="font-cab text-2xl sm:text-3xl md:text-4xl font-semibold">
                  2,000+
                </p>
              </div>
              <div className="space-y-2 md:space-y-3">
                <p className="text-xs sm:text-sm">Project Beneficiaries</p>
                <p className="font-cab text-2xl sm:text-3xl md:text-4xl font-semibold">
                  2,000+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 items-end space-y-10 md:space-y-16">
        <p className="font-bold text-gray-400">YEF in the Press</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-16">
          {PRESS_NAME.map((item) => (
            <div
              className="border border-gray-200 min-h-24 sm:h-28 rounded-md w-full flex p-4 sm:p-6"
              key={item}
            >
              <Image
                src={`/assets/images/logos/${item.toLowerCase()}-logo.png`}
                width={500}
                height={0}
                className="m-auto w-full max-w-[180px] h-auto object-contain"
                alt={item}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 items-end space-y-10 md:space-y-16">
        <p className="font-bold text-gray-400">Sponsors & Partners</p>
        <p className="max-w-xl text-sm sm:text-base">
          Our sponsors and partners aid in providing the best opportunities that
          lead to our youths being equipped with skills to empower them.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-16">
          {SPONSOR_NAME.map((item) => (
            <div
              className="h-32 sm:h-44 w-full flex p-4 sm:p-6 relative"
              key={item}
            >
              <Image
                src={`/assets/images/logos/${item.toLowerCase().replace(" ", "-")}-logo.png`}
                className="m-auto p-4 sm:p-6 object-contain"
                alt={item}
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
