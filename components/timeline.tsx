"use client";

import { motion } from "framer-motion";
import { timelineItems } from "@/lib/site-data";

const lanes = ["Research", "Industry", "Leadership", "Consulting"];

export function Timeline() {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="min-w-[900px] space-y-6">
        {lanes.map((lane) => (
          <div key={lane} className="grid grid-cols-[140px_1fr] gap-6">
            <div className="pt-3 text-sm font-semibold uppercase tracking-wider text-white/60">
              {lane}
            </div>

            <div className="relative min-h-[96px] border-t border-white/10 pt-4">
              <div className="grid grid-cols-8 gap-3">
                {timelineItems
                  .filter((item) => item.lane === lane)
                  .map((item, index) => (
                    <motion.div
                      key={`${item.title}-${item.organization}`}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="col-span-2 rounded-xl border border-white/10 bg-black/40 p-4 shadow-xl hover:border-cyan-400/40"
                    >
                      <div className="mb-2 text-xs text-cyan-300">
                        {item.start} — {item.end}
                      </div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mb-2 text-sm text-white/70">
                        {item.organization}
                      </p>
                      <p className="text-sm leading-relaxed text-white/55">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
