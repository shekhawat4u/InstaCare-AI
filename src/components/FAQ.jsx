import { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Code Caffeine?",
      answer: "Code Caffeine is a platform dedicated to providing high-quality content related to coding projects and blogs. Our goal is to help developers enhance their skills and stay updated with the latest trends in coding.",
    },
    {
      question: "How can I contribute to Code Caffeine?",
      answer: "We welcome contributions from the community. You can reach out to us via email or social media with your ideas or articles. For more detailed information on contributing, please refer to our contribution guidelines.",
    },
    {
      question: "Can I advertise on Code Caffeine?",
      answer: "Yes, we offer advertising opportunities. Please contact us directly for more information on advertising options and rates.",
    },
    {
      question: "What topics do you cover in your blogs?",
      answer: "Our blogs cover a wide range of topics including web development, software engineering, programming languages, and industry trends. We aim to provide insights and tutorials that are useful to both beginners and experienced developers.",
    },
    {
      question: "Are there any membership fees?",
      answer: "No, Code Caffeine is completely free to use. All our content is accessible without any subscription or membership fees.",
    },
    {
      question: "How often do you update your content?",
      answer: "We update our content regularly to ensure it stays relevant and up-to-date. New blog posts and projects are added frequently, so be sure to check back often for the latest updates.",
    },
    {
      question: "Can I suggest a topic for a blog post?",
      answer: "Absolutely! We encourage our readers to suggest topics they are interested in. You can submit your suggestions through our contact form or via email.",
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
