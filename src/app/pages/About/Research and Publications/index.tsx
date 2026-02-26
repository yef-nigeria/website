"use client";

import { Button } from "@/components/ui/button";
import { THEMATIC_AREAS } from "@/utils/constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const PUBLICATIONS = [
  {
    title: "Empowered For the Future - E4F-Life Skills Training Handbook",
    thematicArea: [
      "Youth Empowerment & Livelihoods",
      "Child Protection & Education",
    ],
  },
  {
    title: "Goal Champions Life Skills and Leadership Training Handbook",
    thematicArea: ["Youth Empowerment & Livelihoods"],
  },
  {
    title: "A Handbook For Goal Champions",
    thematicArea: ["Youth Empowerment & Livelihoods"],
  },
  {
    title: "Empowered For The Future Gudebook",
    thematicArea: [
      "Youth Empowerment & Livelihoods",
      "Child Protection & Education",
    ],
  },
];

const ResearchAndPublications = () => {
  return (
    <div className="my-32">
      <section className="container mx-auto pb-32">
        <div className="space-y-12">
          <h3 className="text-6xl font-bold text-blue-500">
            Research and Publications
          </h3>
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
      <div className="bg-brown-100">
        {/* {`text-${index % 2 === 0 ? "blue-200" : "brown-300"}`} */}
        <div className="container mx-auto grid xl:grid-cols-3 gap-12 py-24 ">
          {PUBLICATIONS.map(({ title, thematicArea }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-full space-y-2">
                <div className="h-80 w-full rounded-xl bg-brown-500 p-6 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                  <span className="text-sm opacity-80 text-white">
                    Publication
                  </span>
                  <span className="text-6xl font-bold opacity-20 self-end">
                    PDF
                  </span>
                </div>
                <p className="font-cab text-xl font-medium leading-snug">
                  {title}
                </p>
                <div className="flex gap-3 overflow-x-auto whitespace-nowrap no-scrollbar snap-x snap-mandatory pb-2">
                  {thematicArea.map((name, j) => (
                    <p
                      className="border border-brown-500 p-2 w-fit text-xs text-brown-500 rounded inline-block"
                      key={j}
                    >
                      {name}
                    </p>
                  ))}
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

export default ResearchAndPublications;
