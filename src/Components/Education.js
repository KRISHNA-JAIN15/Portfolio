import React from "react";

const Education = () => {
  return (
    <>
      <div className="EducationPage">
        <div className="EducationText">
          <h1 className="EducationTextHeading">
            My Educational <b>Journey</b>
          </h1>
          <p>
            My academic journey has been focused on building a strong foundation
            in computer science and staying updated with the latest technologies
            and industry trends.
          </p>

          <div className="EducationContainer">
            <div className="EducationItem">
              <div className="EducationHeader">
                <h3>🎓 Bachelor of Technology (B.Tech)</h3>
                <span className="EducationYear">August 2023 - Present</span>
              </div>
              <h4>Computer Science and Engineering</h4>
              <p>
                <strong>
                  Indian Institute of Information Technology Sri City, India
                </strong>
              </p>
              <p>
                <strong>GPA: 9.3</strong>
              </p>
              <div className="EducationDetails">
                <p>
                  <strong>Relevant Coursework:</strong>
                </p>
                <ul>
                  <li>Operating Systems</li>
                  <li>Data Structures and Algorithm</li>
                  <li>Computer Architecture</li>
                  <li>Probability and Statistics</li>
                  <li>Database Management Systems (DBMS)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="CertificationsSection">
            <h2 className="CertificationsHeading">
              Certifications & Achievements
            </h2>
            <div className="CertificationsList">
              <div className="CertificationItem">
                <h4>� IBM Data Science Professional Certificate</h4>
                <p>IBM</p>
              </div>

              <div className="CertificationItem">
                <h4>🏆 Tensorflow-Keras Bootcamp</h4>
                <p>OpenCV University</p>
              </div>

              <div className="CertificationItem">
                <h4>🏆 DeepLearning.AI Professional Certificate</h4>
                <p>Deep Learning Specialization</p>
              </div>
            </div>
          </div>

          <div className="ExperienceSection">
            <h2 className="ExperienceHeading">Professional Experience</h2>
            <div className="ExperienceList">
              <div className="ExperienceItem">
                <div className="ExperienceHeader">
                  <h4>🚀 AI Intern (Full-time)</h4>
                  <span className="ExperienceYear">October 2024 - Present</span>
                </div>
                <p>
                  <strong>Grow Digi India Ltd - Remote</strong>
                </p>
                <p>
                  Developing innovative solutions in Natural Language Processing
                  (NLP) and Generative AI. Research and implement cutting-edge
                  AI techniques to create impactful and efficient applications.
                </p>
              </div>

              <div className="ExperienceItem">
                <div className="ExperienceHeader">
                  <h4>🔬 Model Developer and Optimization (Full-time)</h4>
                  <span className="ExperienceYear">July 2024 - Aug 2024</span>
                </div>
                <p>
                  <strong>Renew Energy - On-Site</strong>
                </p>
                <ul>
                  <li>
                    Data Analysis: Analyzed KPIs and financial metrics, prepared
                    reports for senior management
                  </li>
                  <li>
                    Market Research: Conducted research to identify trends,
                    opportunities, and potential threats
                  </li>
                  <li>
                    Strategic Planning: Assisted in strategic plans development
                    and competitive analysis
                  </li>
                </ul>
              </div>

              <div className="ExperienceItem">
                <div className="ExperienceHeader">
                  <h4>🧠 Core Member - Neuronauts Domain</h4>
                  <span className="ExperienceYear">August 2024 - Present</span>
                </div>
                <p>
                  <strong>Epoch (Machine Learning Club)</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="VolunteerSection">
            <h2 className="VolunteerHeading">Volunteer Experience</h2>
            <div className="VolunteerItem">
              <h4>� Outreach Team Member</h4>
              <p>
                <strong>Web3SSH Summer School and Hackathon</strong>
              </p>
              <p>
                Created awareness by informing students about the summer
                school's goals and explaining how participants can benefit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
