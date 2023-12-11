import { useSpring, animated } from 'react-spring';

const Skills = () => {
   // Define your skills data
   const skills = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript'},
    { id: 4, name: 'React'},
    { id: 5, name: 'Node.js'},
    // Add more skills here...
  ];

  const skillAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  return (
    <animated.div style={skillAnimation}>
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <h3>{skill.name}</h3>
            {/* You can use CSS for progress bars or other representations of skill level */}
            <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Skills;