import React from "react";
import HistoryTimeline from "../History Timeline";

const OUR_TEAM = [
  { name: "Iwalola Akin-Jimoh", role: "Executive Secretary" },
  { name: "Bukola Favour Akingbohungbe", role: "Program Officer" },
  { name: "Funmi Longe", role: "Finance and Admin Manager" },
  { name: "Ugwuoke Oliver Osita", role: "M/E Officer" },
  { name: "Tony Eleme", role: "Social Media manager/Programme Officer" },
  { name: "Tolulope Osoba", role: "Programme Manager" },
  { name: "Adegbaju Festus", role: "Finance and Administrative Assistant" },
];

const WhoWeAre = () => {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 py-20 lg:py-32 sm:mt-20 lg:mt-32">
        <h3 className="text-blue-500 text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
          We equip the African Youth with skills for a better future.
        </h3>
      </div>
      <div className="container p-6 sm:px-0 space-y-6 sm:space-y-24 lg:space-y-32 mx-auto  grid grid-cols-1 md:grid-cols-2 text-center text-base sm:text-lg font-semibold">
        <div className="bg-blue-100 flex justify-center items-center py-6 pr-6 sm:py-16 lg:py-32 text-blue-500 rounded-xl">
          <p className="text-left text-xl sm:text-3xl -rotate-90">Vision</p>
          <p className="max-w-md mx-auto">
            To see a proactive youth population with skills to facilitate
            positive change in their immediate communities.
          </p>
        </div>
        <div className="bg-brown-500 flex justify-center items-center py-6 pr-6 sm:py-16 lg:py-32 text-white rounded-xl">
          <p className="text-left text-xl sm:text-3xl -rotate-90">Mission</p>
          <p className="max-w-md mx-auto">
            To empower youth through strategic partnership and programs in
            health, sports, education and leadership.
          </p>
        </div>
      </div>
      <div className="space-y-16 sm:space-y-24 lg:space-y-32 mt-16 sm:mt-24 lg:mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          <p className="font-bold text-gray-400 md:col-span-2">About Yef</p>
          <p className="md:col-span-7 text-base">
            Youth Empowerment Foundation (YEF) is committed to delivering
            high-quality programmes and services that empower African youth and
            help unlock their full potential.
          </p>
        </div>
        <section className="bg-gray-50" id="history">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 space-y-8">
            <p className="font-bold text-gray-400">Our History</p>
            <HistoryTimeline />
          </div>
        </section>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="space-y-8 lg:col-span-7">
            <div className="space-y-6 w-full">
              <p className="font-bold text-gray-400">About YEF</p>
              <p className="text-sm sm:text-base md:max-w-lg">
                At YEF, strive to foster a culture of responsibility and
                challenge the status quo inherent in our young population. Our
                core values reflect our commitment to this.
              </p>
            </div>
            <div className="bg-gray-50 w-full h-56 sm:h-72 lg:h-80 rounded-xl sm:rounded-2xl bg-[url(/assets/images/usaid.jpg)] bg-blend-multiply bg-cover bg-center" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6 lg:col-span-5 lg:pl-6">
            {[
              "Collaboration",
              "Diversity",
              "Integrity",
              "Passion",
              "Excellence",
            ].map((value, i) => (
              <div
                key={i}
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600"
              >
                {value}
              </div>
            ))}
          </div>
        </section>
        <section className="py-16 sm:py-24 lg:py-40 border-t border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-cab text-2xl sm:text-3xl lg:text-5xl leading-tight font-semibold text-blue-600">
              Creating a nation where the innate potential of our youth is
              harnessed for positive self-development.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8" id="team">
          <p className="font-bold text-gray-400">Our Team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-8 sm:mt-12">
            {OUR_TEAM.map((member, i) => (
              <div className="w-full space-y-4" key={i}>
                <div className="h-64 sm:h-80 lg:h-96 w-full rounded-md bg-brown-500 p-6 flex hover:rotate-3 transition-all" />
                <p className="border border-brown-500 p-2 w-fit text-xs text-brown-500 rounded">
                  {member.role}
                </p>
                <p className="font-cab text-xl sm:text-2xl font-medium">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhoWeAre;
