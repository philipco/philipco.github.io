type TimelineItem = {
  lane: string;
  title: string;
  organization: string;
  start: string;
  end: string;
  description: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative border-l border-slate-300 pl-8">
      {items.map((item) => (
        <div key={`${item.title}-${item.organization}`} className="relative mb-12">
          <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-white bg-blue-700 shadow" />

          <div className="rounded-2xl border border-slate-200 bg-white/75 p-6 shadow-sm backdrop-blur">
            <div className="mb-2 flex flex-wrap items-center gap-3 text-sm">
              <span className="font-medium uppercase tracking-[0.2em] text-blue-700">
                {item.lane}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">
                {item.start} — {item.end}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-slate-950">
              {item.title}
            </h3>

            <p className="mt-1 font-medium text-slate-700">
              {item.organization}
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
