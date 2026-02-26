"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
interface YearItem {
  year: string;
  isActive: boolean;
}

const historyContent: Record<string, React.ReactNode> = {
  "1995": (
    <>
      Founded in{" "}
      <span className="font-medium text-3xl text-blue-500 tracking-tighter">
        1995
      </span>{" "}
      by sisters Iwalola Akin‑Jimoh and Fiwasade Onifade, the Youth Empowerment
      Foundation (YEF) emerged from a simple but urgent observation: <br />
      <span className="font-medium bg-blue-600 text-white p-1">
        Nigeria’s youth population was growing rapidly, yet support systems were
        not.{" "}
      </span>{" "}
      <br />
      In its earliest years, YEF focused on research and grassroots engagement;
      listening to young people, mapping their needs, and building
      community-based responses that would shape decades of programming.
    </>
  ),

  "2001": (
    <>
      In response to the HIV/AIDS crisis of the late 1990s, in{" "}
      <span className="font-medium text-3xl text-blue-500 tracking-tighter">
        2001
      </span>
      , YEF launched one of Nigeria’s first youth-focused HIV/AIDS telephone
      hotlines, a confidential lifeline providing{" "}
      <span className="font-medium">
        accurate information, counselling, and hope to thousands of young people
      </span>
      .
    </>
  ),

  "2006": (
    <>
      By{" "}
      <span className="font-medium text-3xl text-blue-500 tracking-tighter">
        2006
      </span>{" "}
      , YEF expanded its work beyond awareness into direct services including
      voluntary counselling, testing, and peer education programmes across
      schools and communities, strengthening prevention and youth leadership.
    </>
  ),

  "2010s": (
    <>
      In{" "}
      <span className="font-medium text-3xl text-blue-500 tracking-tighter">
        2010
      </span>
      , programmes were broadened to address holistic youth development
      including education support, child protection, vocational training, and
      sports-for-development; equipping young people with skills for life and
      livelihoods.
    </>
  ),

  "2020s": (
    <>
      <span className="font-medium text-3xl text-blue-500 tracking-tighter">
        Today
      </span>
      , YEF operates across multiple states, reaching thousands through
      integrated programmes in health, education, empowerment, and advocacy;
      building resilient futures for Nigeria’s next generation.
    </>
  ),
};

export default function HistoryTimeline() {
  const initialData: YearItem[] = [
    { year: "1995", isActive: true },
    { year: "2001", isActive: false },
    { year: "2006", isActive: false },
    { year: "2010s", isActive: false },
    { year: "2020s", isActive: false },
  ];

  const [years, setYears] = useState<YearItem[]>(initialData);
  const activeYear = years.find((y) => y.isActive)?.year;
  const activeIndex = years.findIndex((y) => y.isActive);
  const progressPercentage = (activeIndex / (years.length - 1)) * 100;

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
    }, 10000);
    return () => clearInterval(interval);
  }, []);

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
        <div className="col-span-2 flex flex-col justify-between relative">
          {years.map((item) => (
            <button
              key={item.year}
              onClick={() => handleClick(item.year)}
              className={`relative z-10 text-center p-3 rounded-md block hover:scale-105 transition-all ${
                item.isActive
                  ? "scale-110 text-white font-medium bg-blue-600"
                  : "text-blue-500 border border-blue-600/20 bg-blue-100"
              }`}
            >
              {item.year}
            </button>
          ))}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-blue-200/50 rounded-full" />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-blue-600 rounded-full"
            animate={{ height: `${progressPercentage}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* RIGHT — Content */}
        <div className="col-span-10 xl:h-[750px] flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p className="text-xl leading-relaxed text-gray-800">
                  {activeYear ? historyContent[activeYear] : null}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="flex justify-between gap-4 mt-8">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="bg-blue-100 w-full h-72 rounded-2xl"
                  title={`card ${activeYear}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
