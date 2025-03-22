import { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is InstaCare AI?",
      answer:
        "InstaCare AI is an advanced healthcare platform that leverages AI to assist in disease detection, medical diagnostics, and predictive analytics, revolutionizing patient care and medical decision-making.",
    },
    {
      question: "How does InstaCare AI assist in disease detection?",
      answer:
        "InstaCare AI utilizes cutting-edge machine learning models to analyze medical images, patient data, and health records, aiding in the early detection of conditions such as brain tumors, pneumonia, and other diseases.",
    },
    {
      question: "Is InstaCare AI suitable for medical professionals?",
      answer:
        "Yes! InstaCare AI is designed for healthcare professionals, researchers, and institutions looking to integrate AI-driven insights into their medical practices for better patient outcomes.",
    },
    {
      question: "What medical conditions can InstaCare AI predict?",
      answer:
        "InstaCare AI focuses on predicting and diagnosing a variety of conditions, including brain tumors, pneumonia, cardiovascular diseases, and more, using AI-powered analysis.",
    },
    {
      question: "How accurate is InstaCare AI in diagnostics?",
      answer:
        "Our AI models are trained on extensive medical datasets to provide high-accuracy predictions, but they are meant to assist healthcare professionals and not replace clinical judgment.",
    },
    {
      question: "Is InstaCare AI free to use?",
      answer:
        "InstaCare AI offers both free and premium services. Basic diagnostic tools are available for free, while advanced predictive analytics and professional insights may require a subscription.",
    },
    {
      question: "How frequently is the AI updated?",
      answer:
        "We continuously enhance our AI models with the latest medical research and datasets to improve diagnostic accuracy and predictive capabilities.",
    },
    {
      question: "Can I integrate InstaCare AI into my hospital system?",
      answer:
        "Yes, InstaCare AI provides API solutions and integration options for hospitals, clinics, and healthcare institutions to streamline AI-assisted diagnostics into their workflow.",
    },
  ];

  return (
    <section className="faq  py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-600">
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex justify-between items-center py-4 px-6 text-left text-gray-300 focus:outline-none"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${open === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === index && (
                <div className="px-6 py-4">
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
