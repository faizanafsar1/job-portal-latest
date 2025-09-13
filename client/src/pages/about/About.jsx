// About.tsx
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">About Our Job Portal</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
          Your gateway to the latest opportunities. We gather jobs from trusted sources and bring them to you in one simple,
          easy-to-use platform.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl font-semibold text-primary-dark mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We know how frustrating job hunting can be. That’s why we created this platform — to make job searching faster,
            smarter, and easier.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to connect talented individuals with opportunities without the hassle of browsing dozens of websites.
            We bring them all in one place, so you can focus on what matters: applying and landing your dream job.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img src="https://via.placeholder.com/400x300" alt="Mission" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary-dark mb-10">Why Choose Our Portal?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-primary-dark mb-2">Verified Sources</h3>
              <p className="text-gray-600">All jobs are scraped from authentic and trusted websites.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-primary-dark mb-2">Easy to Use</h3>
              <p className="text-gray-600">Browse, filter, and apply to jobs with a clean and simple interface.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-primary-dark mb-2">One-Click Apply</h3>
              <p className="text-gray-600">Click “Apply” and you’ll be redirected to the original job source instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gray-100 text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary-dark mb-6">Start Your Career Journey Today</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6 text-gray-600">
          Explore thousands of opportunities and find the job that’s right for you.
        </p>
        <a
          href="/jobs"
          className="bg-primary-dark text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-opacity-90 transition"
        >
          Browse Jobs
        </a>
      </section>
    </div>
  );
}
