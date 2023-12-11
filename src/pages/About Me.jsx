import React from 'react';


function About() {
  return (

    <div className="area">
    <ul className="circles">
      {[...Array(10)].map((_, index) => (
        <li key={index}></li>
      ))}
    </ul>


    

    <section className="about">
      <h1>About Me</h1>
      <p>I am an enthusiastic Full-Stack Web Developer with a passion for creating user-friendly and visually appealing web applications. Although I am considered entry-level to intermediate, I have a solid foundation in front-end technologies such as HTML, CSS, JavaScript, Handlebars, APIs, Node.js, and React.js. I am also familiar with back-end technologies like Node.js and Express.js.

I am a quick learner and always eager to expand my skillset. I am constantly researching new technologies and techniques to improve my ability to deliver high-quality web applications. I am also a team player and enjoy collaborating with others to solve complex problems.

I am confident that my skills and experience make me a valuable asset to any team. I am eager to contribute to the success of your company and help you achieve your goals.

Here are some of my key skills and accomplishments:

Developed and maintained several web applications using React.js and Node.js
Created responsive and user-friendly web designs using HTML, CSS, JavaScript, and React.js
Implemented REST APIs and integrated them with web applications
Optimized web applications for performance and accessibility
Contributed to open-source projects to gain experience and collaborate with other developers
I am also proficient in the following:

Git and GitHub
Agile methodologies
TypeScript
I am currently seeking opportunities to work on challenging and rewarding projects. I am confident that I can make a significant contribution to your team.

Thank you for your time and consideration. </p>
</section>
</div>


  );
};

export default About;
