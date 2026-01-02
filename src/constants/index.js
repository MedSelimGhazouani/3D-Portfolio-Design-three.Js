import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    cv,
    php,
    html,
    linkedin,
    css,
    theatre,
    visitaweb,
    reactjs,
    redux,
    langc,
    youtube,
    problem,
    team,
    languages,
    langcc,
    tailwind,
    gitlogo,
    java,
    nodejs,
    mongodb,
    service,
    git,
    figma,
    docker,
    meta,
    timsoft,
    steg,
    starbucks,
    tesla,
    shopify,
    sql,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
        title: "Github",
        icon:  gitlogo,
        link: "https://github.com/gtfoselim",
      },
    {
      title: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/med-selim-ghazouani-133a66312/",
    },
    
    {
      title: "Personal CV",
      icon: cv,
      link: "https://github.com/gtfoselim",
    },
    {
      title: "YouTube",
      icon: youtube,
      link: "https://github.com/gtfoselim",
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Php",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C",
      icon: langc,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "C++",
      icon: langcc,
    },
    {
      name: "git",
      icon: git,
    },
    /*{
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },*/
  ];
  
  const experiences = [
    {
      title: "Network Intern",
      company_name: "STEG",
      icon: steg,
      iconBg: "#383E56",
      date: "JUly 2022 - August 2022",
      points: [
        "Learned about network operations and infrastructure in a real-world environment.",
      "Assisted in maintaining and troubleshooting network hardware and software issues.",
      "Collaborated with network engineers and IT staff to support daily operations.",
      "Gained hands-on experience with network configuration, monitoring, and security protocols.",
      ],
    },
    {
      title: "Cybersecurity Intern",
      company_name: "Timsoft",
      icon: timsoft,
      iconBg: "#E6DEDD",
      date: "June 2023 - August 2023",
      points: [
        "Learned about cybersecurity practices and principles.",
      "Gained experience with Azure cloud services and monitoring tools.",
      "Assisted in the implementation of security measures and protocols.",
      "Conducted research with colleagues on various cybersecurity topics.",
      "Collaborated with team members to enhance the security posture of the organization.",
      ],
    },
   
  ];
  
  const skills = [
    {
      skillTitle: "Language Proficiency",
      skills: [
        { name: "Arabic", proficiency: "Native" },
        { name: "English", proficiency: "Advanced Level British Council " },
        { name: "French", proficiency: "Fluent" },
        { name: "Spanish", proficiency: "Cervantes Institute certified A2" },
      ],
      image:languages,
    },
    
      {
        skillTitle: "Professional Skills",
        skills: [
          { name: "Problem Solving", proficiency: "Efficiently identifying and resolving issues." },
          { name: "Project Management", proficiency: "Organizing and managing project resources." },
          { name: "Presentation Skills", proficiency: "Effectively communicating ideas to an audience." },
        ],
        image: problem,
      },
      {
        skillTitle: "Other Skills",
        skills: [
          { name: "Team Collaboration", proficiency: "Working well with others to achieve common goals." },
          { name: "Time Management", proficiency: "Prioritizing tasks to manage time effectively." },
          { name: "Adaptability", proficiency: "Adjusting to new situations and challenges." },
          { name: "Critical Thinking", proficiency: "Analyzing information to make well-informed decisions." },
        ],
        image: team,
      },
    ];
  
  
  const projects = [
    {
      name: "El Colisium ",
      description:
        "El Colisium – your one-stop solution for an exceptional theatre experience! This platform facilitates seamless booking of theatre tickets, offers information on upcoming events, and features an online shop for unique theatre-related items.",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: theatre,
      source_code_link: "https://github.com/gtfoselim/El-Colisium-Theatre",
    },
    {
      name: "Visita Application",
      description:
        "This is a healthcare management application with an integrated chatbot feature. This application offers a comprehensive solution for managing healthcare. From appointment scheduling and medical records management to real-time assistance.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "JavaFx",
          color: "green-text-gradient",
        },
        {
          name: "SceneBuilder",
          color: "pink-text-gradient",
        },
      ],
      image: service,
      source_code_link: "https://github.com/gtfoselim/Healthcare-Management-Application-Project-with-Chatbot",
    },
    {
      name: "Visita Website",
      description:
        "This is healthcare management website project enhanced with an integrated chatbot feature. From appointment scheduling and medical records management to real-time assistance and patient inquiries handling, this project aims to revolutionize healthcare.",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: visitaweb,
      source_code_link: "https://github.com/gtfoselim/Healthcare-Management-Website-Project-with-Chatbot",
    },
  ];
  
  export { services, technologies, experiences,skills, projects };