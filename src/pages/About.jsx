import React from 'react';

const About = ({ mode }) => {
  return (
    <div className={`about-page bg-${mode} text-${mode === 'light'?'dark':'light'}`}>
      <h1>About Working Hours Calculator</h1>
      <p>
        Welcome to the Working Hours Calculator web application! This tool is designed to help you keep track of your working hours efficiently and accurately.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Track your daily working hours</li>
        <li>View a summary of your weekly working hours</li>
        <li>Switch between light and dark modes for better visibility</li>
        <li>Receive alerts and notifications about your working hours</li>
      </ul>
      <h2>How It Works</h2>
      <p>
        Simply enter your working hours for each day of the week, and the calculator will automatically tally up the total hours worked. This allows you to easily keep track of your productivity and ensure you are meeting your work goals.
      </p>
      <h2>Why Use This Tool?</h2>
      <p>
        Keeping track of your working hours can be a challenging task, especially when juggling multiple projects or tasks. Our calculator provides a straightforward and user-friendly way to monitor your work hours, helping you stay organized and productive.
      </p>
      <h2>Get Started</h2>
      <p>
        To get started, navigate to the Home page and begin entering your working hours. Whether you're a freelancer, employee, or simply looking to manage your time better, this tool is here to assist you.
      </p>
      <p>
        We hope you find this application helpful. If you have any questions or feedback, feel free to contact us.
      </p>
    </div>
  );
};

export default About;
