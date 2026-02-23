import { THEMATIC_AREAS } from "@/utils/constants";
import React from "react";

const ThematicAreas = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="grid col-auto gap-6">
        {THEMATIC_AREAS.map(({ title, subthemes, description }, index) => (
          <div className="w-full space-y-4" key={index}>
            <div className="w-full h-full rounded-md bg-gray-500 p-6 transition-all flex justify-between gap-4 flex-col">
              <p className="text-2xl font-medium z-20 relative text-white">
                {title}
              </p>
              <p className="text-gray-200">{description}</p>
              <div className="flex gap-6">
                {subthemes.map((text, i) => (
                  <p
                    className="border border-blue-300 p-1 w-fit text-xs text-blue-200 rounded"
                    key={i}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThematicAreas;
