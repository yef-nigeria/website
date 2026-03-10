// "use client";

import { Button } from "@/components/ui/button";
import { THEMATIC_AREAS } from "@/utils/constants";
// import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";
import React from "react";
import { getPublications } from "@/utils/api";
import ViewPublication, { ContentfulAsset } from "./ViewPublication";

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
      <div className="bg-blue-100">
        {/* {`text-${index % 2 === 0 ? "blue-200" : "brown-300"}`} */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 py-12 sm:py-16 lg:py-24">
          {pubs.map(
            ({ sys, fields: { publicationFile, publicationTitle } }, i) => {
              
              return (
                <div key={sys.id}>
                  <div className="w-full space-y-2">
                    <div className="h-56 sm:h-72 lg:h-80 w-full rounded-xl bg-secondary-base p-6 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                      <span className="text-sm opacity-80 text-white">
                        Publication
                      </span>

                      <span className="text-4xl sm:text-5xl lg:text-6xl font-bold opacity-20 self-end">
                        PDF
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="font-cab text-lg sm:text-xl font-medium leading-snug">
                        {publicationTitle as string}
                      </p>
                      {/* CONNECTED HERE */}
                      <ViewPublication
                        document={publicationFile as ContentfulAsset}
                      />
                    </div>
                  </div>
                </div>
              );
            },
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
