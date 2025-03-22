import React from "react";

const NaturalLanguageProgrammingRoadmap = () => {
  return (
    <div className="container min-h-screen mt-10 mx-auto p-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600">
        Natural Language Programming Roadmap: Mastering the Language of Machines
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Natural Language Programming (NLP) enables machines to understand, interpret, and generate human language. This roadmap will guide you in mastering NLP and building innovative applications.
      </p>

      {/* Roadmap sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Basics of Programming */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-yellow-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-yellow-600">1. Basics of Programming</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Understanding Variables and Data Types</li>
            <li>Control Structures: Loops, Conditionals</li>
            <li>Functions and Recursion</li>
            <li>Introduction to Object-Oriented Programming</li>
            <li>Working with Libraries and APIs</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            To get started with NLP, first solidify your programming skills. Focus on languages like Python, which is widely used for NLP tasks.
          </p>
        </div>

        {/* Introduction to NLP */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-green-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-green-600">2. Introduction to NLP</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>What is Natural Language Processing?</li>
            <li>Understanding NLP Tasks and Challenges</li>
            <li>Tokenization and Text Preprocessing</li>
            <li>Text Representation: Bag of Words, TF-IDF</li>
            <li>Popular NLP Libraries (spaCy, NLTK, Gensim)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Understand the foundational concepts of NLP. Learn how machines process text and the key tools available for working with text data.
          </p>
        </div>

        {/* Working with Text Data */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-blue-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-blue-600">3. Working with Text Data</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Cleaning and Preprocessing Text</li>
            <li>Tokenization and Lemmatization</li>
            <li>Named Entity Recognition (NER)</li>
            <li>Removing Stopwords and Stemming</li>
            <li>Word Embeddings: Word2Vec, GloVe</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Learn to work with raw text data by cleaning, tokenizing, and transforming it into a format suitable for machine learning models.
          </p>
        </div>

        {/* Machine Learning Foundations */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-orange-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-orange-600">4. Machine Learning Foundations</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Supervised vs. Unsupervised Learning</li>
            <li>Classification and Regression</li>
            <li>Evaluating Models: Accuracy, Precision, Recall</li>
            <li>Building and Training Machine Learning Models</li>
            <li>Feature Engineering and Selection</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Machine learning is at the heart of many NLP applications. Learn key algorithms like decision trees, k-NN, and Naive Bayes, which are commonly used for text classification tasks.
          </p>
        </div>

        {/* Deep Learning for NLP */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-teal-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-teal-600">5. Deep Learning for NLP</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Introduction to Neural Networks</li>
            <li>Recurrent Neural Networks (RNNs) and LSTMs</li>
            <li>Convolutional Neural Networks (CNNs) for Text</li>
            <li>Transformer Models: BERT, GPT</li>
            <li>Transfer Learning and Fine-Tuning Pretrained Models</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Dive into deep learning for NLP tasks like machine translation, summarization, and language generation. Familiarize yourself with architectures such as RNNs and transformers.
          </p>
        </div>

        {/* NLP Applications */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-red-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-red-600">6. NLP Applications</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Chatbots and Virtual Assistants</li>
            <li>Sentiment Analysis and Opinion Mining</li>
            <li>Text Classification and Topic Modeling</li>
            <li>Machine Translation</li>
            <li>Text Summarization</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Explore various real-world applications of NLP, from creating chatbots to performing sentiment analysis and building advanced language models.
          </p>
        </div>

        {/* Advanced NLP Topics */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-indigo-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-indigo-600">7. Advanced NLP Topics</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Generative Models: GANs for Text</li>
            <li>Reinforcement Learning in NLP</li>
            <li>Multilingual NLP</li>
            <li>Explainability and Interpretability of NLP Models</li>
            <li>Fairness and Bias in NLP</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Push the boundaries of NLP by exploring cutting-edge techniques such as generative models, reinforcement learning, and addressing bias in NLP systems.
          </p>
        </div>

        {/* NLP Tools & Frameworks */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-purple-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-600">8. NLP Tools & Frameworks</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>spaCy, NLTK, Gensim</li>
            <li>Transformers (Hugging Face)</li>
            <li>TextBlob and Vader Sentiment</li>
            <li>Google Cloud Natural Language API</li>
            <li>DeepPavlov and AllenNLP</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Familiarize yourself with popular NLP frameworks and tools to streamline development, whether you&wpos;re working on text classification, translation, or sentiment analysis.
          </p>
        </div>

        {/* NLP Projects & Practice */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform-gpu hover:bg-pink-100">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-pink-600">9. NLP Projects & Practice</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Building a Sentiment Analysis Model</li>
            <li>Developing a Chatbot with Deep Learning</li>
            <li>Creating a News Categorization System</li>
            <li>Machine Translation Project</li>
            <li>Text Summarization Model</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Apply your NLP skills through hands-on projects, building real-world applications that use text data for insights, generation, and understanding.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Begin Your NLP Journey Today!</h3>
        <p className="text-lg mb-6">
          Follow this roadmap to start your journey into the world of Natural Language Programming. Learn, build, and innovate.
        </p>
        <a
          href="https://www.udemy.com/courses/search/?q=natural%20language%20processing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-blue-500 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-gradient-to-l transition-all duration-300"
        >
          Start Learning Now
        </a>
      </div>
    </div>
  );
};

export default NaturalLanguageProgrammingRoadmap;
