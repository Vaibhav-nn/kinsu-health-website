import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 gradient-bg-light" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 ring-1 ring-teal-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Powered by In-House AI
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Your{" "}
            <span className="gradient-text">AI-Powered</span>{" "}
            Health Assistant
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
            Kinsu keeps your health records, prescriptions, and vitals organized
            and secure. Get AI-powered insights and never miss a dose again—all
            with your data protected by our proprietary technology.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full gradient-bg px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
            >
              Get in Touch
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-teal-500/20 to-indigo-500/20 blur-2xl" />
            <div className="relative rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-gray-200">
              <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-12">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <DashboardCard
                    icon={
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    }
                    label="Health Records"
                    value="Organized"
                  />
                  <DashboardCard
                    icon={
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    }
                    label="Prescriptions"
                    value="Tracked"
                  />
                  <DashboardCard
                    icon={
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    }
                    label="Vitals"
                    value="Monitored"
                  />
                  <DashboardCard
                    icon={
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    }
                    label="AI Insights"
                    value="Active"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-sm">
      <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
        {icon}
      </div>
      <span className="text-xs text-gray-500 text-center">{label}</span>
      <span className="text-sm font-semibold text-gray-900">{value}</span>
    </div>
  );
}
