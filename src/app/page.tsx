import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { ShelfVisual } from "@/components/ShelfVisual";

export default function HomePage() {
  return (
    <div className="atmosphere min-h-screen">
      <SiteHeader />

      <main className="mx-auto grid min-h-[calc(100vh-5.5rem)] w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20">
        <section className="max-w-xl">
          <p className="animate-rise font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight text-ink sm:text-6xl md:text-7xl"
            style={{ letterSpacing: "-0.045em" }}
          >
            SlideShelf
          </p>
          <h1 className="animate-rise-delay-1 mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug text-ink sm:text-3xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Upload lecture slides once. Students find them whenever exams hit.
          </h1>
          <p className="animate-rise-delay-1 mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
            Stop resending the same PDFs on WhatsApp. Course reps shelve slides
            by level, course, and week — students browse and download on demand.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <Link href="/login" className="btn-primary">
              Get the slides
            </Link>
            <Link href="/login?role=rep" className="btn-secondary">
              I&apos;m the course rep
            </Link>
          </div>
        </section>

        <section aria-label="Preview of organized lecture slides" className="lg:justify-self-end">
          <ShelfVisual />
        </section>
      </main>

      <section className="border-t border-[var(--line)] bg-white/40">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
          {[
            {
              title: "One upload",
              copy: "Course reps add a slide once with title, week, and file. Done.",
            },
            {
              title: "Clear shelves",
              copy: "Students pick level and semester, then open the course they need.",
            },
            {
              title: "Exam-ready access",
              copy: "Open or download anytime — no chasing the rep in the group chat.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h2
                className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink"
                style={{ letterSpacing: "-0.02em" }}
              >
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
