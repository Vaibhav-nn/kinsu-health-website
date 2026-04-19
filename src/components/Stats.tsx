const stats = [
  { value: "O(1)", label: "Response Time", description: "Constant-time AI inference" },
  { value: "10+", label: "Indian Languages", description: "Native language support" },
  { value: "100%", label: "In-House AI", description: "No third-party data sharing" },
  { value: "HIPAA", label: "Compliant", description: "Healthcare standards met" },
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold gradient-text sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-lg font-semibold text-gray-900">
                {stat.label}
              </div>
              <div className="mt-1 text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
