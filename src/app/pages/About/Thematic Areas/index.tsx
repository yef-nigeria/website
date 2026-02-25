import { Button } from "@/components/ui/button";
import { THEMATIC_AREAS } from "@/utils/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ThematicAreas = () => {
  return (
    <div className="my-32">
      <section className="container mx-auto pb-32">
        <div className="space-y-12">
          <h3 className="text-6xl font-bold text-blue-500">Thematic Areas</h3>
          <p className="text-xl">
            Empowering vulnerable children and young people in Nigeria to live
            <br />
            safe, healthy, and purposeful lives.
          </p>
        </div>

        {/* <div className="">
          <p className="font-cab text-3xl font-semibold">
            Inspiring, equipping, and empowering young Nigerians with tools and
            skills for purposeful and fulfilling lives.
          </p>
        </div> */}
      </section>
      <div className="bg-blue-100">
        <div className="container mx-auto grid xl:grid-cols-2 gap-6 py-24 ">
          {THEMATIC_AREAS.map(({ title, subthemes, description }, index) => (
            <div className="w-full space-y-4 text-white" key={index}>
              <div
                className={`rounded-md bg-${index % 2 === 0 ? "blue-600" : "brown-500"} p-6 transition-all flex justify-between gap-4 flex-col`}
              >
                <p className="text-2xl font-medium z-20 relative">{title}</p>
                <p
                  className={`text-${index % 2 === 0 ? "blue-200" : "brown-300"}`}
                >
                  {description}
                </p>
                <div className="flex gap-3">
                  {subthemes.map((text, i) => (
                    <p
                      className={`border ${index % 2 === 0 ? "border-blue-300/40" : "border-brown-300/40"} p-1 w-fit text-xs rounded`}
                      key={i}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto leading-tight text-center space-y-5 pt-32">
        <p className="font-bold text-2xl">Help Us Reach More Young People!</p>
        <Button>Partner With Us</Button>
      </div>
    </div>
  );
};

export default ThematicAreas;
