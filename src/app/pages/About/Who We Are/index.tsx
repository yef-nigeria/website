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
    <section className="">
      <div className="container mx-auto bg-gray-50 py-32 mt-32">
        <h3 className="text-blue-500 text-4xl font-semibold text-center">
          We equip the African Youth with skills for a better future.
        </h3>
      </div>
      <div className="container grid grid-cols-2 mx-auto text-center text-lg font-semibold">
        <div className="bg-blue-100 py-32 text-blue-500">
          <p className="max-w-md place-self-center">
            Our Vision is to see a proactive youth population with skills to
            facilitate positive change in their immediate communities.
          </p>
        </div>
        <div className="bg-brown-500 py-32 text-white">
          <p className="max-w-md place-self-center">
            Our mission is to empower youth through strategic partnership and
            programs in health, sports, education and leadership.
          </p>
        </div>
      </div>
      <div className="space-y-32 mt-32">
        <div className="container mx-auto grid grid-cols-12">
          <p className="font-bold text-gray-400 col-span-2">About Yef</p>
          <p className="col-span-5">
            Youth Empowerment Foundation (YEF) is committed to delivering
            high-quality programmes and services that empower African youth and
            help unlock their full potential.
          </p>
        </div>
        <section className="bg-gray-50" id="history">
          <div className="container mx-auto py-32 space-y-8">
            <p className="font-bold text-gray-400">Our History</p>
            <HistoryTimeline />
          </div>
        </section>
        <section className="container mx-auto grid grid-cols-12 gap-12">
          <div className="space-y-8 col-span-7">
            <div className="space-y-6 w-full">
              <p className="font-bold text-gray-400">About YEF</p>
              <p className="md:max-w-lg">
                At YEF, strive to foster a culture of responsibility and
                challenge the status quo inherent in our young population. Our
                core values reflect our commitment to this.
              </p>
            </div>
            <div className="bg-gray-50 w-full h-80 rounded-2xl bg-[url(/assets/images/usaid.jpg)] bg-blend-multiply bg-cover bg-center" />
          </div>
          <div className="flex justify-between flex-col h-full col-span-5">
            {[
              "Collaboration",
              "Diversity",
              "Integrity",
              "Passion",
              "Excellence",
            ].map((value, i) => (
              <div key={i} className={"text-2xl font-semibold text-blue-600"}>
                {value}
              </div>
            ))}
          </div>
        </section>
        <section className="py-40 border-t border-b border-gray-100">
          <div className="container mx-auto">
            <p className="font-cab text-5xl leading-tight font-semibold text-blue-600">
              Creating a nation where the innate potential of our youth is
              harnessed for positive self-development.
            </p>
          </div>
        </section>
        <section className="container mx-auto" id="team">
          <p className="font-bold text-gray-400">Our Team</p>
          <div className="grid grid-cols-4 gap-12 mt-12">
            {OUR_TEAM.map((member, i) => (
              <div className="w-full space-y-4">
                <div className="h-96 w-full rounded-md bg-brown-500 p-6 flex hover:rotate-3 transition-all" />
                <p className="border border-brown-500 p-2 w-fit text-xs text-brown-500 rounded">
                  {member.role}
                </p>
                <p className="font-cab text-2xl font-medium">{member.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhoWeAre;
