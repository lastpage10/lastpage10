export function ShelfVisual() {
  return (
    <div className="animate-shelf relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#0f6b56] via-[#0c5848] to-[#08362d] shadow-[0_30px_80px_rgba(8,54,45,0.35)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(224,122,47,0.35), transparent 35%)",
        }}
      />
      <div className="absolute inset-6 flex flex-col justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
            Level 200 · Sem 1
          </p>
          <h2
            className="mt-3 max-w-[12ch] font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-white sm:text-4xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Data Structures
          </h2>
        </div>

        <div className="space-y-3">
          {[
            { week: "W1", title: "Arrays & Linked Lists", type: "PDF" },
            { week: "W2", title: "Stacks and Queues", type: "PPTX" },
            { week: "W3", title: "Trees & Binary Search", type: "PDF" },
            { week: "W4", title: "Hash Tables", type: "PDF" },
          ].map((item, index) => (
            <div
              key={item.week}
              className="animate-float flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-3 py-3 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e07a2f] text-xs font-bold text-white">
                {item.week}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">
                  {item.title}
                </p>
                <p className="text-xs text-white/60">{item.type} · Ready</p>
              </div>
              <span className="text-xs font-semibold text-white/80">Open</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
