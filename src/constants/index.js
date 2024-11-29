import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mao,
  lifelearner, 
  sunnet,
  goshen,
  global,
  demands,
  portfolio,
  ecom,
  meetups
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Wordpress Designer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Web Developer",
    company_name: "Maocular Tech Expert",
    icon: mao,
    iconBg: "#ffffff",
    date: "May 2018 - Present",
    points: [
      "Developed, implemented and maintained many highly robust web applications using ReactJs as frontend and Django framework as a backend and this has endeared customers because of level of professionalism shows in\
      maintaining and improving on such applications",
      "Currently working on a food sharing ecommerce project using Nodejs, ReactJs, MongoDB. The project is \
        integrated with Paystack payment gateway",
      "Trained several internship students programing languages like Python and JavaScripts, turning them into junior \
developer thereby increasing the workforce of the company at less cost",
      "Built and maintained a school management system using JavaScript, Html and PHP taking school administration\
to the next level , reduce redundancy and increase communication between parents and schools",
"Tasked with responsibilities of supervising and coordinating major web development projects, using python with\
Django, PHP, Reactjs and Javascripts.The leadership method brings the best out of the team members and\
create a sense of belonging and this crossly increased the company productivity",
"Developed and maintained several projects using Django framework with Python, Css, Bootstrap, Javascripts and\
Html. Creating APIs for these project for the mobile app consumptions"
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Life Learner, Nigeria",
    icon: lifelearner,
    iconBg: "#E6DEDD",
    date: "March 2016- April 2018",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
  {
    title: "Web Developer",
    company_name: "Sunet Dynamic Technology",
    icon: sunnet,
    iconBg: "#E6DEDD",
    date: "March 2014- February 2016",
    points: [
      "Designed and maintained highly responsive front end of a Clockin’s transport application using Bootstrap, Html,\
      Css and JavaScript’s and the success recorded on the project brings over 12 other similar projects",

      "Improved on supermarket point of sales developed using PHP, HTML and codeigniter by improving on the user\
      interface and in return increase the user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Trained junior developers JavaScript , Html and Css and the success recorded makes the company a choice of\
      many other young developer and this in turn brings more project opportunities and increase the awareness of\
      the company",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I love how he communicate effectively, bridging technical concepts and business goals effortlessly",
    name: "Loveth James",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "He consistently delivers robust, scalable, and innovative software solutions",
    name: "Chris Brown",
    designation: "COO",
    company: "Froke",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Kunle highly dependable, with impressive technical and problem-solving skills.",
    name: "Mr John",
    designation: "CTO",
    company: "Life Learner",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "The Global Win",
    description:
      "A lottery game web-application that allow user to play different games such as travel and scholarship games.\
      Implemented with paystack payment gateway",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: global,
    source_code_link: "",
    web_link: "https://portal.theglobalwin.com/user/lottery-details/2?q=5",
  },
  {
    name: "School Portal",
    description:
      "Web application that that provide a complete school adminitration such as attendance, result computations, accounting e.t.c",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Codeigniter",
        color: "pink-text-gradient",
      },
      
    ],
    image: goshen,
    source_code_link: "",
    web_link: 'https://portal.goshenmontessorischools.com/site/login'
  },
  {
    name: "Demands App",
    description:
      "A web-app that connect vendor rendering services and client together. The front\
      -end is react and backend is django rest-framework and it it hosted on cloud hosting service",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
    ],
    image: demands,
    source_code_link: "",
    web_link: 'https://demands.ng'
  },


  
];


const sideProjects = [
  {
    name: "k-ecommerce",
    description:
      "An e-coomerce web-based platform for shopping house hold goods. Built with django framework and deployed on render cloud service. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "postgrad",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/kunle1984/my-ecommerce/tree/main",
    web_link: 'https://k-ecommerce.onrender.com/'
  },
  {
    name: "Meetups",
    description:
      "Web application that enables users to search for various events to participate with. It also lallow register user to create, manage, aad add speaker to their events.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: meetups,
    source_code_link: "https://github.com/kunle1984/k-meetups/tree/master",
    web_link: 'https://k-meetup-web.onrender.com/'
  },
  {
    name: "Portfolio",
    description:
      "A portfolio app built using django and python. it show cases some of my projects. it also has a mini blog that give update \
      on current state of tech",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/kunle1984/kunle-portfolio",
    web_link: 'https://kunle-portfolio.onrender.com/'
  },


  
];

export { services, technologies, experiences, testimonials, projects, sideProjects};
