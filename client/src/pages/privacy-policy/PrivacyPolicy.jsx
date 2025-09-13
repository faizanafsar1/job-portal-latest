export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          At <span className="font-semibold">Job-Portal</span>, we value your privacy and are committed to protecting your
          personal information. This Privacy Policy explains how we collect, use, and safeguard the data you provide while using
          our website.
        </p>

        <h2 className="text-xl font-semibold text-primary-dark mt-6 mb-3">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          Our website does not require account registration. We only display job listings scraped from trusted sources. We do not
          collect sensitive personal information such as passwords, financial details, or identification numbers.
        </p>

        <h2 className="text-xl font-semibold text-primary-dark mt-6 mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          Any data you voluntarily provide through our contact form (like your name or email) will only be used to respond to your
          queries. We do not sell or share your personal information with third parties.
        </p>

        <h2 className="text-xl font-semibold text-primary-dark mt-6 mb-3">3. Third-Party Links</h2>
        <p className="text-gray-700 mb-4">
          Our website may contain links to third-party job sources. Once you leave our website, we are not responsible for the
          privacy practices of those external websites. Please review their privacy policies separately.
        </p>

        <h2 className="text-xl font-semibold text-primary-dark mt-6 mb-3">4. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We implement reasonable security measures to protect the information you provide. However, please note that no online
          transmission is 100% secure.
        </p>

        <h2 className="text-xl font-semibold text-primary-dark mt-6 mb-3">5. Updates to This Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
        </p>

        <h2 className="text-xl font-semibold text-primary-dark mt-6 mb-3">6. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, feel free to contact us at:{" "}
          <a href="mailto:info@job-portal.com" className="text-primary-dark font-semibold hover:underline">
            info@job-portal.com
          </a>
        </p>

        <p className="text-gray-500 text-sm mt-8">Last Updated: January 5, 2025</p>
      </div>
    </div>
  );
}
