"use client";

import { Button } from "@/components/ui/button";
import { THEMATIC_AREAS } from "@/utils/constants";
import React from "react";
import { motion } from "framer-motion";

const ThematicAreas = () => {
  return (
    <div className="my-24 lg:my-32">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-12">
            <h3 className="text-4xl lg:text-6xl font-bold text-blue-900">
              Thematic Areas
            </h3>
            <p className="text-lg lg:text-xl">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-2 gap-6 py-12 sm:py-16 lg:py-24">
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
                  className={[
                    "group rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-500 shadow-xs hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between gap-4 sm:gap-6",
                    index % 2 === 0 ? "bg-blue-900" : "bg-brown-500",
                  ].join(" ")}
                >
                  <p className="text-lg sm:text-2xl font-medium z-20 relative">
                    {title}
                  </p>
                  <p
                    className={index % 2 === 0 ? "text-blue-200" : "text-brown-300"}
                  >
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {subthemes.map((text, i) => (
                      <p
                        className={[
                          "border p-1 w-fit text-xs rounded",
                          index % 2 === 0
                            ? "border-blue-300/40"
                            : "border-brown-300/40",
                        ].join(" ")}
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 leading-tight text-center space-y-5 pt-16 sm:pt-24 lg:pt-32">
        <p className="font-bold text-lg sm:text-2xl">
          Help Us Reach More Young People!
        </p>
        <Button>Partner With Us</Button>
      </div>
    </div>
  );
};

export default ThematicAreas;
