import React from "react";

const Contact = () => {
  return (
    <>
      <div className="ContactPage">
        <div className="ContactText">
          <h1 className="ContactTextHeading">
            Get in <b>Touch</b>!
          </h1>
          <p>
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology and innovation.
            <br />
            <br />
            Whether you're looking for a <b>Full Stack Developer</b>,{" "}
            <b>AI/ML Engineer</b>, or <b>DevOps enthusiast</b> for your next
            project, or if you want to collaborate on something exciting, I'd
            love to hear from you!
            <br />
            <br />
            Feel free to reach out through any of the platforms below. I
            typically respond within 24 hours.
          </p>

          <div className="ContactDetails">
            <div className="ContactItem">
              <h3>📧 Email</h3>
              <p>
                <a
                  href="mailto:jainkrishna1502@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jainkrishna1502@gmail.com
                </a>
              </p>
            </div>

            <div className="ContactItem">
              <h3>📱 Phone</h3>
              <p>
                <a
                  href="tel:+919267924499"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 92679 24499
                </a>
              </p>
            </div>
          </div>

          <div className="SocialLinks">
            <h3>Connect with me:</h3>
            <div className="SocialButtons">
              <a
                href="https://github.com/KRISHNA-JAIN15"
                target="_blank"
                rel="noopener noreferrer"
                className="SocialButton"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/krishna-jain"
                target="_blank"
                rel="noopener noreferrer"
                className="SocialButton"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/krishna_jain15"
                target="_blank"
                rel="noopener noreferrer"
                className="SocialButton"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/_ufo_believers_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="SocialButton"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
