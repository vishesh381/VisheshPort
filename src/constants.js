// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejsLogo.png';
import tsLogo from './assets/tech_logo/tsLogo.png';
import mysqlLogo from './assets/tech_logo/mysql.png'; 
import awsLogo from './assets/tech_logo/aws.png';
import dockerLogo from './assets/tech_logo/docker.png';
import junitLogo from './assets/tech_logo/junit.png';
import seleniumLogo from './assets/tech_logo/selenium.png'; 
import salesforceLogo from './assets/tech_logo/salesforce.png'
import kotlinLogo from './assets/tech_logo/kotlin.png'
import jenkinsLogo from './assets/tech_logo/jenkins.png'
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import almLogo from './assets/tech_logo/alm.png'
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's
import seatGeek from './assets/company_logo/seatGeek.png';
import accentureLogo from './assets/company_logo/accenture.png';
import genpactLogo from './assets/company_logo/GenpactLogo.png';
import peopleInfoTechLogo from './assets/company_logo/peopleinfotech.png';

// Education Section Logo's
import paceUniversityLogo from './assets/education_logo/pace.png';
import nietLogo from './assets/education_logo/niet.png';

// Project Section Logo's
import balanceblissLogo from './assets/work_logo/balancebliss.png';
import caliLogo from './assets/work_logo/california.png';
import tweetLogo from './assets/work_logo/tweetclassifier.png';
import newsZapLogo from './assets/work_logo/newz.png';
import shopzyLogo from './assets/work_logo/shop.png';
import swiftLogo from './assets/work_logo/swiftInvoice.png';
import yumrunLogo from './assets/work_logo/yumrun.png';
import skillBridgeLogo from './assets/work_logo/skillbridgeLogo.png';
import dreamLogo from './assets/work_logo/dream.png';
import gatherlyLogo from './assets/work_logo/gatherly.png';
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'TypeScript', logo: tsLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'SOSL/SOQL', logo: salesforceLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Node.js', logo: nodejsLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Apex', logo: salesforceLogo },
      { name: 'Kotlin', logo: kotlinLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Devops, Tools & Testing',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'AWS', logo: awsLogo }, 
      { name: 'Docker', logo: dockerLogo },
      { name: 'jUnit', logo: junitLogo },
      { name: 'Selenium', logo: seleniumLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Jira', logo: mcLogo },
      { name: 'Jenkins', logo: jenkinsLogo },
      { name: 'ALM', logo: almLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: seatGeek,
      role: "Senior Full Stack Java Developer",
      company: "SeatGeeks",
      date: "Sept 2024 - Current",
      desc: `● Built and optimized frontend features using React, including interactive seat maps, dynamic pricing displays, and
personalized seat recommendations, ensuring smooth, responsive performance across devices
● Implemented full-stack features, including backend APIs for seat availability, pricing, and real-time Deal Score ranking,
integrating seamlessly with frontend components.
● Designed and maintained real-time updates using WebSockets (SockJS + STOMP), delivering instant seat availability, pricing
changes, and notifications to enhance user engagement and conversion.
● Integrated the Deal Score algorithm to highlight best-value seats, auto-scroll to optimal sections, and provide personalized
recommendations based on user behavior and location.
● Collaborated with designers to implement scalable, high-performance UI features while developing end to end functionality.
`,
  skills: [
    "ReactJS",
    "Redux",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "SQL",
    "Spring Boot",
    "Java",
    "Salesforce Development",
    "MongoDB",
    "Redis",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Bitbucket",
    "AWS",
  ],
    }
    ,{
      id: 1,
      img: accentureLogo,
      role: "Senior Full Stack Java Developer",
      company: "Accenture",
      date: "February 2021 - September 2023",
      desc: `● Built scalable, high performance web applications using React.js (frontend) and Spring Boot (backend), reducing load times by 25% and improving system reliability.
      ● Refactored frontend architecture with React hooks, Redux, and Context API for state management, creating reusable components that accelerated development by 30%.
● Designed and implemented distributed microservices on AWS (EC2, Lambda, CloudWatch) with CI/CD pipelines via Jenkins, improving deployment efficiency.
● Optimized backend performance using Redis caching and Elasticsearch indexing, reducing query latency by 40%.
● Led containerization initiatives with Docker & Kubernetes, increasing system uptime and reliability by 35%.
● Directed design reviews, mentored 6+ developers, and influenced architectural decisions to deliver scalable, fault tolerant solutions.
● Championed best practices in frontend (React.js) and backend (Spring Boot) code quality, documentation, and testing, reducing production defects by 30%.
● Facilitated cross functional collaboration between frontend, backend, and DevOps teams, streamlining delivery of features for global clients.
● Acted as technical lead for critical modules, guiding junior developers, conducting code reviews, and implementing reusable UI components and services.`,
  skills: [
    "ReactJS",
    "Redux",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "SQL",
    "Spring Boot",
    "Java",
    "Salesforce Development",
    "MongoDB",
    "Redis",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Bitbucket",
    "AWS",
  ],
    },
    {
  id: 2,
  img: genpactLogo,
  role: "Fullstack Engineer",
  company: "Genpact",
  date: "January 2020 - January 2021",
  desc: `● Developed event driven microservices in Java + Spring Boot with Kafka for real-time content updates and access decision workflows.
● Designed REST APIs enabling structured data retrieval, filtering, and integration with trading applications.
● Built responsive frontend dashboards with React and Vue.js, integrating live trade data via WebSockets for real time updates and notifications.
● Architected scalable system designs including database schema, caching strategies, and asynchronous processing for high traffic loads.
● Collaborated with cross functional teams to define architecture, enforce design patterns, conduct code reviews, and ensure maintainable full-stack solutions.`,
  skills: [
    "PostgreSQL",
    "AWS",
    "JavaScript",
    "Docker Containerization",
    "Spring Boot",
    "Java",
    "MongoDB",
    "Jenkins",
    "Bitbucket",
    "React.js",
    "Vue.js",
  ],
}, 
    {
      id: 3,
      img: peopleInfoTechLogo,
      role: "Frontend Engineer",
      company: "People Infotech Pvt. Ltd.",
      date: "July 2019 - Dec 2019",
      desc: `● Enhanced and supported backend systems by resolving 30+ bugs and implementing 20+ features with full test coverage.
● Developed dynamic frontend components using React and vanilla JavaScript, improving user interactivity, responsiveness, and DOM manipulation performance.
● Implemented custom JavaScript functionality including event handling, animations, form validation, and API integration to create seamless user experiences.
● Optimized frontend performance by minimizing reflows, managing asynchronous requests with Promises and async/await, and reducing load times.
● Gained hands-on experience in the full SDLC, including requirement analysis, design, development, testing, and deployment.
● Participated in Agile Scrum ceremonies, including daily stand ups, sprint planning, and retrospectives.
● Collaborated with QA, backend, and product managers to deliver high quality features with attention to UI/UX and accessibility.
● Documented code, processes, and workflows to support team knowledge sharing and maintainability.
● Built reusable JavaScript utility functions and modular code to improve development efficiency across projects.
`,
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
        "DOM",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: paceUniversityLogo,
      school: "Pace University, New York",
      grade: "3.8/4.0",
      desc: "I have completed my Master's degree (MS) in Computer Science from Pace University, New York. During my time, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at PACE University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Science - MS",
    },
    {
      id: 1,
      img: nietLogo,
      school: "NIET, Gr. Noida",
      grade: "3.3/4.0",
      desc: "I completed my Bachelor's degree in Computer Science from NIET College. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at NIET College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - Computer Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "SkillBridge",
      description:
        "Developed a full-stack job application portal with 100+ user interactions per session with chat and resume download features",
      image: skillBridgeLogo,
      tags: ["Springboot", "Java", "MongoDB", "React JS", "API","Render"],
      github: "https://github.com/vishesh381/Capstone_Project_V1",
      webapp: "https://skillbridge-frontend.onrender.com/",
    },
    {
      id: 1,
      title: "YumRun",
      description:
        "Built a full-stack food delivery app with smart ordering, real-time tracking, and Razorpay/Stripe integration",
      image: yumrunLogo,
      tags: ["React JS", "Springboot", "MySQL", "ExpAmazon RDSress", "Razorpay & Stripe API"],
      github: "https://github.com/vishesh381/YumRun",
      webapp: "https://yumrun-frontend.onrender.com/",
    },
    {
      id: 2,
      title: "SwiftInvoice",
      description:
        "Developed a cloud-based billing app with Razorpay integration, PDF billing, self-user ordering, billing analytics",
      image: swiftLogo,
      tags: ["React JS", "Spring Boot", "MySQL","Razorpay API"],
      github: "https://github.com/vishesh381/SwiftInvoice",
    },
    {
      id: 3,
      title: "Shopzy",
      description:
        "Built a full-stack eCommerce app with product browsing, cart management, order processing with customer and payment support",
      image: shopzyLogo,
      tags: ["React JS", "Spring Boot","PostgreSQL", "Stripe API"],
      github: "https://github.com/vishesh381/Shopzy-Backend",
      webapp: "https://shopzy-frontend.onrender.com/",
    },
    {
      id: 4,
      title: "NewsZap---Your-daily-dose-of-news",
      description:
        "Created, a React-based news app delivering real-time headlines via NewsAPI with category-wise filtering and responsive UI.",
      image: newsZapLogo,
      tags: ["HTML", "CSS", "JavaScript", "ReactJS"],
      github: "https://github.com/vishesh381/NewsZap---Your-daily-dose-of-news",
      webapp: "https://newszap-your-daily-dose-of-news.onrender.com/",
    },
    {
      id: 5,
      title: "California House Price Prediction",
      description:
        `Built and optimized ML models to predict California house prices with 85% accuracy on 20K+ records, analyzing income
correlations via Linear Regression, Decision Tree, and Random Forest; visualized results with scikit-learn and Matplotlib.`,
      image: caliLogo,
      tags: ["Python", "ML"],
      github: "https://github.com/vishesh381/California-Housing-Prices",
    },
    {
      id: 6,
      title: "Balance Bliss",
      description:
        "Created a lifestyle Android app enabling 500+ users to track wellness goals using Jetpack Compose",
      image: balanceblissLogo,
      tags: ["Kotlin", "Jetpack Compose", "Firebase"],
      github: "https://github.com/vishesh381/Balance-Bliss",
    },
    {
      id: 7,
      title: "Tweet Classifier",
      description:
        "Extracted and classified user opinions from Twitter, a widely used social networking site where millions share views on life, products, and services. The project aimed to harness this rich data source to analyze sentiments on various topics, including politics and religion, and derive valuable, actionable insights.",
      image: tweetLogo,
      tags: ["Java", "API", "Twitter4J", "Swing"],
      github: "https://github.com/vishesh381/Tweet-Classification",
    },
    { 
      id: 7,
      title: "DreamCRV",
      description:
        "Developed a real-time car customization tool using Lightning Web Components OSS with real-time form handling.",
      image: dreamLogo,
      tags: ["Java", "API", "Twitter4J", "Swing"],
      github: "https://github.com/vishesh381/DreamCRV",
    },
    {
      id: 7,
      title: "Gatherly",
      description:
        "Built an invitation management app in Salesforce, streamlining event creation and RSVPs within the platform",
      image: gatherlyLogo,
      tags: ["Java", "API", "Twitter4J", "Swing"],
      github: "https://github.com/vishesh381/Gatherly---Your-Invitation-App",
    },
  ];  