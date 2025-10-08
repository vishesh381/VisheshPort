import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Vishesh Sharma
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'React Developer',
                'Java Fullstack Developer',
                'Salesforce Developer',
                'Passionate Coder',
                'Proactive Learner',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
          Results-driven Software Engineer with 5 years of experience in full-stack and frontend development, specializing in Salesforce, Java/Spring Boot, and React.js for enterprise-scale applications. Fast-tracked to Senior Software Development Engineer (SDE) within one year, consistently recognized for delivering complex, high-impact features with strong quality standards.
I bring advanced expertise in JavaScript (ES6+), TypeScript, and modern UI libraries such as React.js, Redux/Redux Toolkit, Context API, Material UI, Tailwind CSS, and Mantine. My extensive React experience spans state management, lifecycle optimization, memoization, lazy loading, code splitting, and building reusable component libraries—ensuring scalable and modular architectures.
On the backend, I specialize in Java (Spring Boot), Node.js, and Express.js, focusing on secure, high-performance REST APIs with JWT/OAuth2 authentication and RBAC implementations. I have deep database knowledge across PostgreSQL, MySQL, Oracle, and MongoDB, with hands-on experience in schema design, indexing, and query optimization. My cloud expertise includes CI/CD pipelines with Jenkins, GitHub Actions, and GitLab CI, containerization with Docker, Kubernetes orchestration, and deploying microservices on AWS, GCP, and Heroku.
I am proficient in automated testing using Jest, React Testing Library, Cypress, and Postman, following TDD practices for production-ready releases. My portfolio includes full-stack solutions with payment gateway integrations, real-time dashboards, and scalable CRM applications.
As a 4x Salesforce Certified Developer, I excel in Apex, LWC, Triggers, and API integrations (REST/SOAP). Beyond coding, I contribute as a collaborative Agile team member, mentor junior engineers, conduct code reviews, and drive knowledge-sharing to elevate team performance.  
          </p>
          {/* Resume Button */}
<button
  onClick={() => window.open('/Vishesh_Sharma_Full_Stack_Java_Developer.pdf', '_blank')}
  className="bg-[#8245ec] text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:bg-[#6d34cc] transition duration-300"
>
  Download CV
</button>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Vishesh Sharma"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
