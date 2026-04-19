export default function AISection() {
  return (
    <section id="ai" className="py-20 lg:py-32 gradient-bg-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our In-House AI Model
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We don't just use AI—we build it. Our proprietary models are designed
            for healthcare, offering unmatched speed, security, and localization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <div className="absolute -top-4 left-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                O(1) Response Time
              </div>
            </div>
            <div className="mt-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Lightning Fast</h3>
              <p className="mt-3 text-gray-600">
                Our optimized architecture delivers responses in constant time, regardless of query complexity. 
                Instant insights when every second matters in healthcare decisions.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <div className="absolute -top-4 left-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                Indian Languages
              </div>
            </div>
            <div className="mt-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Multilingual Support</h3>
              <p className="mt-3 text-gray-600">
                Trained on Indian languages including Hindi, Tamil, Telugu, Bengali, Marathi, and more. 
                Healthcare AI that speaks your language.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <div className="absolute -top-4 left-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                100% Secure
              </div>
            </div>
            <div className="mt-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Complete Privacy</h3>
              <p className="mt-3 text-gray-600">
                No third-party APIs. No data leaving our servers. Your sensitive health information 
                stays within our secure, HIPAA-compliant infrastructure.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Enterprise Solutions for Healthcare
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Beyond personal health management, we offer our AI models to hospitals 
              and healthcare providers for advanced data analysis and clinical decision support.
            </p>

            <div className="mt-8 space-y-6">
              <AIFeature
                title="Clinical Decision Support"
                description="Help doctors make faster, more informed decisions with AI-powered analysis of patient data, medical history, and latest research."
              />
              <AIFeature
                title="Hospital Data Analytics"
                description="Transform raw healthcare data into actionable insights. Identify patterns, predict outcomes, and optimize patient care."
              />
              <AIFeature
                title="Seamless Integration"
                description="Our APIs integrate with existing hospital management systems, EHRs, and clinical workflows without disruption."
              />
            </div>
          </div>

          <div className="space-y-6">
            {/* AI Chatbot Widget */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-teal-500/10 to-indigo-500/10 blur-2xl" />
              <div className="relative rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-2xl rounded-tl-none p-3">
                      <p className="text-sm text-gray-700">
                        मेरा ब्लड प्रेशर इस हफ्ते सामान्य से ज्यादा रहा है। क्या मुझे चिंता करनी चाहिए?
                      </p>
                      <p className="text-xs text-gray-500 mt-1 italic">
                        (My blood pressure has been higher than usual this week. Should I be concerned?)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">K</span>
                    </div>
                    <div className="flex-1 bg-teal-50 rounded-2xl rounded-tl-none p-3">
                      <p className="text-sm text-gray-700">
                        मैंने आपकी हाल की रीडिंग्स का विश्लेषण किया है। पिछले 5 दिनों में आपका सिस्टोलिक प्रेशर 8% बढ़ा है।
                      </p>
                      <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                          नियमित नींद का समय बनाए रखें
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                          नमक का सेवन कम करें
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>Processed with Kinsu AI</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-teal-600 font-medium">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>12ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Two widgets side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Clinical Decision Support Widget */}
              <div className="rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Clinical Support</h4>
                    <p className="text-xs text-gray-500">For Doctors</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">Rahul M., 45y</span>
                    <span className="text-xs text-amber-600 font-medium bg-amber-50 px-1.5 py-0.5 rounded">Review</span>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Drug Interaction</span>
                      <span className="text-amber-600 font-medium">Moderate</span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-indigo-600">
                    AI: Adjust dose based on eGFR
                  </p>
                </div>
              </div>

              {/* Hospital Analytics Widget */}
              <div className="rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Hospital Analytics</h4>
                    <p className="text-xs text-gray-500">Real-time</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-teal-600">847</div>
                    <div className="text-xs text-gray-500">Patients</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-indigo-600">94%</div>
                    <div className="text-xs text-gray-500">Beds</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-emerald-600">↓12%</div>
                    <div className="text-xs text-gray-500">Readmit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-1">
        <svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
