"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause } from "lucide-react";

const historyContent: Record<string, React.ReactNode> = {
  "1995": (
    <div className="space-y-4">
      <p>
        Founded in{" "}
        <span className="font-medium text-xl sm:text-2xl lg:text-3xl text-blue-500 tracking-tighter">
          1995
        </span>{" "}
        by sisters Iwalola Akin‑Jimoh and Fiwasade Onifade, the Youth
        Empowerment Foundation (YEF) emerged from a simple but urgent
        observation.
      </p>
      <p className="font-medium bg-blue-600 text-white px-2 py-1 rounded w-fit">
        Nigeria’s youth population was growing rapidly, yet support systems were
        not.
      </p>
      <p>
        In its earliest years, YEF focused on research and grassroots
        engagement—listening to young people, mapping their needs, and building
        community-based responses that would shape decades of programming.
      </p>
    </div>
  ),

  "2001": (
    <div className="space-y-4">
      <p>
        In response to the HIV/AIDS crisis of the late 1990s, in{" "}
        <span className="font-medium text-xl sm:text-2xl lg:text-3xl text-blue-500 tracking-tighter">
          2001
        </span>
        , YEF launched one of Nigeria’s first youth-focused HIV/AIDS telephone
        hotlines.
      </p>
      <p className="font-medium">
        It served as a confidential lifeline providing accurate information,
        counselling, and hope to thousands of young people.
      </p>
    </div>
  ),

  "2006": (
    <div className="space-y-4">
      <p>
        By{" "}
        <span className="font-medium text-xl sm:text-2xl lg:text-3xl text-blue-500 tracking-tighter">
          2006
        </span>
        , YEF expanded its work beyond awareness into direct services.
      </p>
      <p>
        This included voluntary counselling, testing, and peer education
        programmes across schools and communities—strengthening prevention and
        youth leadership.
      </p>
    </div>
  ),

  "2010s": (
    <div className="space-y-4">
      <p>
        In{" "}
        <span className="font-medium text-xl sm:text-2xl lg:text-3xl text-blue-500 tracking-tighter">
          2010
        </span>
        , programmes broadened to address holistic youth development.
      </p>
      <p>
        This included education support, child protection, vocational training,
        and sports-for-development—equipping young people with skills for life
        and livelihoods.
      </p>
    </div>
  ),

  "2020s": (
    <div className="space-y-4">
      <p>
        <span className="font-medium text-xl sm:text-2xl lg:text-3xl text-blue-500 tracking-tighter">
          Today
        </span>
        , YEF operates across multiple states, reaching thousands through
        integrated programmes in health, education, empowerment, and advocacy.
      </p>
      <p>We’re building resilient futures for Nigeria’s next generation.</p>
    </div>
  ),
};

export default function HistoryTimeline() {
  const years = useMemo(() => ["1995", "2001", "2006", "2010s", "2020s"], []);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeYear = years[activeIndex];
  const progressPercentage = (activeIndex / (years.length - 1)) * 100;
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrefersReducedMotion(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // 🔄 Auto-cycle every 10 seconds (with user control)
  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % years.length);
    }, 10000);
    return () => window.clearInterval(interval);
  }, [isAutoPlaying, prefersReducedMotion, years.length]);

  const selectIndex = (index: number, opts?: { focus?: boolean }) => {
    setActiveIndex(index);
    if (opts?.focus) tabRefs.current[index]?.focus();
  };

  return (
    <section className="relative">
      <div className="flex items-center justify-between gap-3 pb-3 absolute -top-14 right-0">
        <p className="text-xs text-blue-600/70">
          {activeIndex + 1}/{years.length}
        </p>
        <button
          type="button"
          onClick={() => setIsAutoPlaying((p) => !p)}
          className="text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-md px-3 py-2"
          aria-pressed={isAutoPlaying}
        >
          {isAutoPlaying ? (
            <Pause fill="white" strokeWidth={0} size={16} />
          ) : (
            <Play fill="white" strokeWidth={0} size={16} />
          )}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 ">
        {/* LEFT — Year Buttons */}
        <div className="md:col-span-2 relative">
          <div
            className="flex md:flex-col md:justify-between gap-3 md:gap-auto md:h-full overflow-x-auto md:overflow-visible whitespace-nowrap no-scrollbar snap-x snap-mandatory pb-2 md:pb-0"
            role="tablist"
            aria-label="YEF history timeline years"
            aria-orientation="horizontal"
            onKeyDown={(e) => {
              const key = e.key;
              const isHorizontal =
                window.matchMedia("(max-width: 767px)").matches;
              const nextKeys = isHorizontal ? ["ArrowRight"] : ["ArrowDown"];
              const prevKeys = isHorizontal ? ["ArrowLeft"] : ["ArrowUp"];

              if (nextKeys.includes(key)) {
                e.preventDefault();
                setIsAutoPlaying(false);
                const next = (activeIndex + 1) % years.length;
                selectIndex(next, { focus: true });
              } else if (prevKeys.includes(key)) {
                e.preventDefault();
                setIsAutoPlaying(false);
                const prev = (activeIndex - 1 + years.length) % years.length;
                selectIndex(prev, { focus: true });
              } else if (key === "Home") {
                e.preventDefault();
                setIsAutoPlaying(false);
                selectIndex(0, { focus: true });
              } else if (key === "End") {
                e.preventDefault();
                setIsAutoPlaying(false);
                selectIndex(years.length - 1, { focus: true });
              }
            }}
          >
            {years.map((year, index) => {
              const isActive = index === activeIndex;
              const tabId = `history-tab-${year}`;
              const panelId = `history-panel-${year}`;

              return (
                <button
                  key={year}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  id={tabId}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    selectIndex(index);
                  }}
                  className={`relative z-10 text-center px-4 py-3 md:p-3 rounded-md block transition-colors whitespace-nowrap min-h-11 focus:outline-none focus:ring-2 focus:ring-white/60 ${
                    isActive
                      ? "text-white font-medium bg-blue-600 shadow"
                      : "text-blue-600 border border-blue-600/20 bg-blue-100 hover:bg-blue-200"
                  }`}
                >
                  {year}
                </button>
              );
            })}
          </div>
          {/* Mobile (horizontal) progress bar */}
          <div className="md:hidden relative h-1 w-full bg-blue-200/50 rounded-full">
            <motion.div
              className="absolute left-0 top-0 h-1 bg-blue-600 rounded-full"
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
          <p className="sr-only" aria-live="polite">
            {`Step ${activeIndex + 1} of ${years.length}`}
          </p>
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-blue-200/50 rounded-full" />
          <motion.div
            className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-blue-600 rounded-full"
            animate={{ height: `${progressPercentage}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* RIGHT — Content */}
        <div className="md:col-span-10 flex flex-col">
          <div className="relative flex-1 min-h-[300px] lg:min-h-[280px]">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={activeYear}
                className="absolute inset-0"
                initial={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, filter: "blur(4px)" }
                }
                animate={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 1, filter: "blur(0px)" }
                }
                exit={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, filter: "blur(4px)" }
                }
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.35,
                  ease: "easeInOut",
                }}
              >
                <div
                  id={`history-panel-${activeYear}`}
                  role="tabpanel"
                  aria-labelledby={`history-tab-${activeYear}`}
                  tabIndex={0}
                  className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 outline-none"
                >
                  {activeYear ? historyContent[activeYear] : null}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.6,
              duration: prefersReducedMotion ? 0 : 0.7,
            }}
          >
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 sm:mt-8">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="bg-blue-100 w-full h-48 sm:h-64 lg:h-72 rounded-xl sm:rounded-2xl"
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
