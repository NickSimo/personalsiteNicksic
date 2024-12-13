import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-zinc-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            I'm a passionate backend developer with extensive experience in building scalable distributed systems
            and microservices architectures. With a strong foundation in database design and system
            optimization, I focus on creating robust and efficient backend solutions that power
            modern applications.
          </p>
          <p>
            My expertise extends to automated testing and quality assurance, with significant experience
            in developing comprehensive test suites using Java Spring framework. I've implemented
            various testing methodologies including unit testing, integration testing, and end-to-end
            testing to ensure robust and reliable software delivery.
          </p>
          <p>
            Throughout my career, I've worked extensively with Java Spring ecosystem, developing
            RESTful APIs, implementing security measures, and optimizing application performance.
            I have a proven track record of designing and implementing automated testing strategies
            that have significantly improved code quality and reduced deployment issues.
          </p>
          <p>
            I'm particularly passionate about creating maintainable and scalable code, following
            best practices and design patterns. My experience includes setting up continuous
            integration/continuous deployment (CI/CD) pipelines and implementing automated testing
            frameworks that have helped teams deliver high-quality software more efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;