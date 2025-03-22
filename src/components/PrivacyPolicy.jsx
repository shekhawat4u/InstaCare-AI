import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container text-white p-8 mx-auto max-w-5xl">
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
       <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 mt-3 text-blue-400">Privacy Policy</h1>
      </header>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Introduction</h2>
        <p className="text-lg text-gray-200">
          Welcome to our Privacy Policy page. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Information We Collect</h2>
        <p className="text-lg text-gray-200 mb-4">
          We may collect information about you in a variety of ways. The information we may collect includes:
        </p>
        <ul className="list-disc pl-6 text-gray-200">
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and contact information that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have directly viewed.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Use of Your Information</h2>
        <p className="text-lg text-gray-200 mb-4">
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
        </p>
        <ul className="list-disc pl-6 text-gray-200">
          <li>Assist law enforcement and respond to subpoenas.</li>
          <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
          <li>Create and manage your account.</li>
          <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the site to you.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Disclosure of Your Information</h2>
        <p className="text-lg text-gray-200 mb-4">
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </p>
        <ul className="list-disc pl-6 text-gray-200">
          <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
          <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Security of Your Information</h2>
        <p className="text-lg text-gray-200">
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Contact Us</h2>
        <p className="text-lg text-gray-200 mb-4">If you have questions or comments about this Privacy Policy, please contact us at:</p>
        <p className="text-lg text-blue-400">Email: <a href="mailto:codecaffeine@proton.me" className="hover:underline">codecaffeine@proton.me</a></p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
