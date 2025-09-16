import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-50 py-12">
      <div className="max-w-3xl w-full px-6">
        <h1 className="text-4xl font-bold mb-6">
          Get in <span className="text-blue-600">Touch</span>!
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed text-justify mb-10">
          I'm always open to discussing new opportunities, collaborations, or
          just having a chat about technology and innovation.
          <br />
          <br />
          Whether you're looking for a{" "}
          <b>Full Stack Developer</b>, <b>AI/ML Engineer</b>, or{" "}
          <b>DevOps enthusiast</b> for your next project, or if you want to
          collaborate on something exciting, I'd love to hear from you!
          <br />
          <br />
          Feel free to reach out through any of the platforms below. I
          typically respond within 24 hours.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
            <a
              href="mailto:jainkrishna1502@gmail.com"
              className="text-blue-600 hover:underline"
            >
              jainkrishna1502@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">📱 Phone</h3>
            <a
              href="tel:+919267924499"
              className="text-blue-600 hover:underline"
            >
              +91 92679 24499
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Connect with me:</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/KRISHNA-JAIN15"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/krishna-jain"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/krishna_jain15"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/_ufo_believers_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
