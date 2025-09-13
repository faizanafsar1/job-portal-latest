// Contact.tsx
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Have questions or feedback? We’d love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold text-primary-dark mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Reach out to us via email or fill out the contact form. We’ll respond as quickly as possible.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary-dark">Email</h3>
              <p className="text-gray-600">support@jobportal.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-dark">Phone</h3>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-dark">Location</h3>
              <p className="text-gray-600">Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-dark text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
