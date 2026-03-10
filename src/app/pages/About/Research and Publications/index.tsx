// "use client";

import { Button } from "@/components/ui/button";
import { THEMATIC_AREAS } from "@/utils/constants";
// import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";
import { Document, Thumbnail } from "react-pdf";
import React from "react";
import { getPublications } from "@/utils/api";

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

const ResearchAndPublications = async () => {
  const pubs = await getPublications();

  return (
    <div className="my-24 lg:my-32">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-32">
        <div className="space-y-12">
          <h3 className="text-4xl lg:text-6xl font-bold text-blue-500">
            Research and Publications
          </h3>
          <p className="text-lg lg:text-xl">
            Empowering vulnerable children and young people in Nigeria to live
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 py-12 sm:py-16 lg:py-24">
          {pubs.map(
            ({ sys, fields: { publicationFile, publicationTitle } }, i) => (
              // <motion.div
              //   key={i}
              //   initial={{ opacity: 0, y: 40 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   transition={{ duration: 0.5, delay: i * 0.1 }}
              //   viewport={{ once: true }}
              // >
              <div key={sys.id}>
                <div className="w-full space-y-2">
                  <div className="h-56 sm:h-72 lg:h-80 w-full rounded-xl bg-brown-500 p-6 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                    <span className="text-sm opacity-80 text-white">
                      Publication
                    </span>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold opacity-20 self-end">
                      PDF
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-cab text-lg sm:text-xl font-medium leading-snug">
                      {publicationTitle as string}
                    </p>
                    <div className="flex">
                      <p className="text-sm flex items-center">
                        <Eye strokeWidth={1} />
                        View
                      </p>

                      <p className="text-sm flex items-center">
                        <Download strokeWidth={1} />
                        Download
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex flex-wrap gap-2 sm:gap-3">
                    {thematicArea.map((name, j) => (
                      <p
                        className="border border-brown-500 p-2 w-fit text-xs text-brown-500 rounded inline-block"
                        key={j}
                      >
                        {name}
                      </p>
                    ))}
                  </div> */}
                </div>
              </div>
              // </motion.div>
            ),
          )}
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

export default ResearchAndPublications;
