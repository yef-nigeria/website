import React from "react";

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
        <section className="bg-brown-100" id="history">
          <div className="container mx-auto py-32 space-y-8">
            <p className="font-bold text-gray-400">Our History</p>
            <div className="grid grid-cols-12">
              <div className="col-span-2">
                <div className="flex justify-between flex-col h-full gap-6">
                  {[
                    { year: "1995", isActive: true },
                    { year: "2001", isActive: false },
                    { year: "2006", isActive: false },
                    { year: "2010s", isActive: false },
                    { year: "2020s", isActive: false },
                  ].map(({ year, isActive }, i) => (
                    <button
                      key={i}
                      className={`${isActive ? "text-white font-medium bg-" : "text-brown-500 border border-"}brown-500 w-20 text-center p-3 rounded-md `}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-span-10 space-y-8">
                <p className="text-xl leading-relaxed">
                  Founded in{" "}
                  <span className="font-medium text-3xl text-brown-500 tracking-tighter">
                    1995
                  </span>{" "}
                  by sisters Iwalola Akin‑Jimoh and Fiwasade Onifade, the Youth
                  Empowerment Foundation (YEF) emerged from a simple but urgent
                  observation:{" "}
                  <b>
                    Nigeria’s youth population was growing rapidly, yet support
                    systems were not.{" "}
                  </b>{" "}
                  <br />
                  In its earliest years, YEF focused on research and grassroots
                  engagement; listening to young people, mapping their needs,
                  and building community-based responses that would shape
                  decades of programming.
                </p>
                {/* <div className="flex justify-between gap-4">
                  {[1, 2].map((item) => (
                    <div
                      key={item}
                      className="bg-gray-50 w-full h-72 rounded-2xl"
                      title={`card ${item}`}
                    />
                  ))}
                </div> */}
              </div>
            </div>
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
        <section className="container mx-auto">
          <p className="font-bold text-gray-400">Our Team</p>
          <div className="grid grid-cols-4 gap-12 mt-12">
            {new Array(8).fill(null).map((_, i) => (
              <div
                key={i}
                className="bg-gray-50 w-full h-72 rounded-2xl"
                title={`card ${i}`}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhoWeAre;
