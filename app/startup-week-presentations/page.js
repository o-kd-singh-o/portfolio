import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Startup Week Presentations | KD Singh",
  description: "Presentations and AI prompts by KD Singh for Startup Week.",
};

// Presentation data template - easy to customize titles, images, and links
const presentations = [
  {
    id: "plug-the-revenue-leaks",
    shortTitle: "Plug the Revenue Leaks",
    fullTitle: "Plug the Revenue Leaks: Small Small Business AI Playbook to Automate Growth and Drive Revenue.",
    session: "Session 01",
    // To add your slide cover image:
    // 1. Add image to /public (e.g. /public/slides/plug-the-revenue-leaks.png)
    // 2. Set slideImage: "/slides/plug-the-revenue-leaks.png"
    slideImage: null,
    presentationUrl: "#", // Add presentation link (e.g., Google Slides, PDF, Gamma)
    promptsUrl: "#", // Add AI prompts link or document
  },
  {
    id: "the-era-of-vibe-coding-is-over",
    shortTitle: "The Era of Vibe Coding is Over",
    fullTitle: "The Era of Vibe Coding is Over. It's Time to Ship the Production Code.",
    session: "Session 02",
    // To add your slide cover image:
    // 1. Add image to /public (e.g. /public/slides/vibe-coding-over.png)
    // 2. Set slideImage: "/slides/vibe-coding-over.png"
    slideImage: null,
    presentationUrl: "#", // Add presentation link (e.g., Google Slides, PDF, Gamma)
    promptsUrl: "#", // Add AI prompts link or document
  },
];

export default function StartupWeekPresentationsPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:px-6 lg:px-8 xl:px-12 w-full">
      <div className="w-full max-w-[1800px] mx-auto pt-8">
        {/* Page Header */}
        <header className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-4 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Startup Week Presentations
          </h1>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
            Slide decks and companion AI prompts from my talks at Startup Week.
          </p>
        </header>

        {/* Both Containers Side-by-Side in One Row Taking Full Available Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full items-stretch">
          {presentations.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-24 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-8 shadow-sm transition-all hover:shadow-md flex flex-col justify-between h-full"
            >
              {/* Top Section: Title & Header */}
              <div>
                {/* Short form before the title */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    {item.shortTitle}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    {item.session}
                  </span>
                </div>

                {/* Full Title of the Presentation */}
                <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug mb-6">
                  {item.fullTitle}
                </h2>

                {/* Slide Cover Preview Container (16:9 Aspect Ratio) */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 flex flex-col items-center justify-center p-6 text-center">
                  {item.slideImage ? (
                    <Image
                      src={item.slideImage}
                      alt={`${item.fullTitle} - First Slide`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center max-w-sm">
                      {/* Slide Placeholder Graphic */}
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 border border-blue-100 dark:border-blue-900">
                        <svg
                          className="w-7 h-7"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.75}
                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                          />
                        </svg>
                      </div>
                      <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-gray-200/70 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full mb-2">
                        Cover Slide Preview
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                        {item.shortTitle}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        First page of the presentation slide deck will appear here
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800/80 flex flex-wrap items-center gap-3">
                {/* 1. Presentation Button */}
                <a
                  href={item.presentationUrl}
                  target={item.presentationUrl.startsWith("http") ? "_blank" : undefined}
                  rel={item.presentationUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Presentation
                </a>

                {/* 2. AI Prompts Button */}
                <a
                  href={item.promptsUrl}
                  target={item.promptsUrl.startsWith("http") ? "_blank" : undefined}
                  rel={item.promptsUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  AI Prompts
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
