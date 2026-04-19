import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-32 gradient-bg-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Interested in Kinsu?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're building the future of personal health management. If you're
            an investor interested in learning more about Kinsu, we'd love to
            hear from you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:investors@kinsu.health"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full gradient-bg px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact for Investment
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            investors@kinsu.health
          </p>
        </div>
      </div>
    </section>
  );
}
