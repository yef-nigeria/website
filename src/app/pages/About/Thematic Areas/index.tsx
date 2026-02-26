"use client";

import { Button } from "@/components/ui/button";
import { THEMATIC_AREAS } from "@/utils/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ThematicAreas = () => {
  return (
    <div className="my-32">
      <section className="container mx-auto pb-32">
        <div className="grid grid-cols-2">
          <div className="space-y-12">
            <h3 className="text-6xl font-bold text-blue-500">Thematic Areas</h3>
            <p className="text-xl">
              YEF’s work is structured around key thematic areas that address
              the most pressing challenges facing vulnerable children and young
              people in Nigeria.
            </p>
          </div>
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="w-full space-y-4 text-white">
                <div
                  className={`group rounded-2xl p-8 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between gap-6 bg-${index % 2 === 0 ? "blue-600" : "brown-500"} `}
                >
                  <p className="text-2xl font-medium z-20 relative">{title}</p>
                  <p
                    className={`text-${index % 2 === 0 ? "blue-200" : "brown-300"}`}
                  >
                    {description}
                  </p>
                  <div className="flex gap-3 overflow-x-auto whitespace-nowrap no-scrollbar snap-x snap-mandatory pb-2">
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
            </motion.div>
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
