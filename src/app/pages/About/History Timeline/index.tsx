"use client";
import { useEffect, useState } from "react";

const historyContent = {
  "1995": (
    <>
      Founded in{" "}
      <span className="font-medium text-3xl text-blue-500 tracking-tighter">
        1995
      </span>{" "}
      by sisters Iwalola Akin‑Jimoh and Fiwasade Onifade, the Youth Empowerment
      Foundation (YEF) emerged from a simple but urgent observation:{" "}
      <b>
        Nigeria’s youth population was growing rapidly, yet support systems were
        not.{" "}
      </b>{" "}
      <br />
      In its earliest years, YEF focused on research and grassroots engagement;
      listening to young people, mapping their needs, and building
      community-based responses that would shape decades of programming.
    </>
  ),

  "2001": `In response to the HIV/AIDS crisis of the late 1990s, YEF launched one of 
  Nigeria’s first youth-focused HIV/AIDS telephone hotlines — a confidential lifeline 
  providing accurate information, counselling, and hope to thousands of young people.`,

  "2006": `YEF expanded its work beyond awareness into direct services including 
  voluntary counselling, testing, and peer education programmes across schools 
  and communities, strengthening prevention and youth leadership.`,

  "2010s": `Programmes broadened to address holistic youth development — education 
  support, child protection, vocational training, and sports-for-development — 
  equipping young people with skills for life and livelihoods.`,

  "2020s": `Today, YEF operates across multiple states, reaching millions through 
  integrated programmes in health, education, empowerment, and advocacy — 
  building resilient futures for Nigeria’s next generation.`,
};

export default function HistoryTimeline() {
  const initialData = [
    { year: "1995", isActive: true },
    { year: "2001", isActive: false },
    { year: "2006", isActive: false },
    { year: "2010s", isActive: false },
    { year: "2020s", isActive: false },
  ];

  const [years, setYears] = useState(initialData);
  const activeYear = years.find((y) => y.isActive)?.year;

  // 🔄 Auto-cycle every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setYears((prev) => {
        const currentIndex = prev.findIndex((y) => y.isActive);
        const nextIndex = (currentIndex + 1) % prev.length;

        return prev.map((y, i) => ({
          ...y,
          isActive: i === nextIndex,
        }));
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // 👆 Handle click
  const handleClick = (year: string) => {
    setYears((prev) =>
      prev.map((y) => ({
        ...y,
        isActive: y.year === year,
      })),
    );
  };

  return (
    <section>
      <div className="grid grid-cols-12 gap-10">
        {/* LEFT — Year Buttons */}
        <div className="col-span-2 flex flex-col justify-between">
          {years.map((item) => (
            <button
              key={item.year}
              onClick={() => handleClick(item.year)}
              className={`${item.isActive ? "scale-110 text-white font-medium bg-" : "text-blue-500 border border-"}blue-600 w-20 text-center p-3 rounded-md block hover:scale-105 transition-all`}
            >
              {item.year}
            </button>
          ))}
        </div>

        {/* RIGHT — Content */}
        <div className="col-span-10 h-[580px] flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <p className="text-xl leading-relaxed text-gray-800">
              {historyContent[activeYear]}
            </p>
          </div>

          <div className="flex justify-between gap-4 mt-8">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-blue-100 w-full h-72 rounded-2xl"
                title={`card ${item}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
