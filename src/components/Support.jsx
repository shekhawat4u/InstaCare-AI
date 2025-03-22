import { Helmet } from "react-helmet";

const Support = () => {
  return (
    <div className="px-4 py-8 mx-auto max-w-5xl mt-3 text-white">
      <Helmet>
        <title>Support</title>
      </Helmet>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">Support</h1>
        <p className="text-lg text-gray-200">
          We are here to help! If you have any questions or need assistance, please check the following information or use the contact form below.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Common Issues</h2>
        <ul className="list-disc pl-6 text-lg text-gray-200 space-y-4">
          <li><strong>Account Problems:</strong> If you’re having issues with your account, please check our FAQ or contact us for support.</li>
          <li><strong>Technical Issues:</strong> For technical support, provide details about the issue and any error messages.</li>
          <li><strong>Billing Inquiries:</strong> For questions regarding billing or payments, please include your account details.</li>
        </ul>
      </section>

      <section id="contact" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Contact Us</h2>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <input
            type="hidden"
            name="access_key"
            value="367ad5c0-2ca0-44b3-9278-610144ed372d"
          />
          <input
            type="text"
            placeholder="Your Name"
            name="Name"
            required
            className="w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="Email"
            required
            className="w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none"
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
            className="w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-blue-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Support;
