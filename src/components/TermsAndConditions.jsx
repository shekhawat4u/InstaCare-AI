import { Helmet } from "react-helmet";

const TermsAndConditions = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-5xl mt-3 text-white">
      <Helmet>
        <title>Terms and Conditions</title>
      </Helmet>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">Terms and Conditions</h1>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Introduction</h2>
        <p className="text-lg text-gray-200">
          Welcome to our Terms and Conditions page. These terms and conditions outline the rules and regulations for the use of our website.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Acceptance of Terms</h2>
        <p className="text-lg text-gray-200">
          By accessing and using this website, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, you must not use this website.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Use of the Site</h2>
        <p className="text-lg text-gray-200">
          We grant you a limited, non-exclusive, non-transferable license to use the site for personal, non-commercial purposes. You must not use the site in any way that is unlawful or harmful.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Intellectual Property</h2>
        <p className="text-lg text-gray-200">
          The content, features, and functionality of the site are owned by us and are protected by intellectual property laws. You may not copy, modify, or distribute any content without our express permission.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Limitation of Liability</h2>
        <p className="text-lg text-gray-200">
          To the maximum extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the site.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Changes to Terms</h2>
        <p className="text-lg text-gray-200">
          We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Contact Us</h2>
        <p className="text-lg text-gray-200 mb-4">If you have any questions about these terms and conditions, please contact us at:</p>
        <p className="text-lg text-blue-400">Email: <a href="mailto:codecaffeine@proton.me" className="hover:underline">codecaffeine@proton.me</a></p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
