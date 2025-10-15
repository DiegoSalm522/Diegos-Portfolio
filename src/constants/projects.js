export const projects = [
  {
    id: 1,
    title: "Diego's Portfolio",
    description: "Personal portfolio website showcasing software development projects and skills.",
    subDescription: [
      "Developed a responsive portfolio using React, JavaScript, HTML, and Tailwind CSS, enhanced with smooth animations and modern UI components.",
      "Included key sections such as Hero, About Me, Skills, Projects, and a contact form to facilitate professional networking.",
      "Implemented dynamic project showcases featuring modal interactions and detailed project information displays.",
      "Ensured cross-browser compatibility and responsive design to provide a consistent experience on all devices and platforms.",
    ],
    demo: "https://diegosalmones-portfolio.vercel.app/",
    repository: "https://github.com/DiegoSalm522/DiegosPortfolio",
    image: "/assets/projects/onlineportfolio.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.png",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vite.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.png",
      },
      {
        id: 4,
        name: "HTML",
        path: "/assets/logos/html.png",
      },
      {
        id: 5,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwind.png",
      },
      {
        id: 6,
        name: "Magic UI",
        path: "/assets/logos/magicui.png",
      },
      {
        id: 7,
        name: "Motion",
        path: "/assets/logos/motion.png",
      },
    ],
  },
  {
    id: 2,
    title: "Grief: The Journey of Loss - Video Game",
    description: "3D emotional adventure video game combining platforming and puzzle mechanics, exploring the stages of grief through the story of Darwin.",
    subDescription: [
      "Designed and programmed multiple levels, including core mechanics, aesthetics, and gameplay dynamics using Unity and C#.",
      "Developed online multiplayer functionality with Photon Engine, enabling cooperative gameplay.",
      "Collaborated in a team of 5 to create the game from scratch as part of the Tec de Monterrey Video Games Concentration.",
    ],
    demo: "https://diegosalm522.itch.io/grief-the-journey-of-loss",
    repository: "",
    image: "/assets/projects/grief.jpg",
    tags: [
      {
        id: 1,
        name: "Unity",
        path: "/assets/logos/unity.png",
      },
      {
        id: 2,
        name: "C#",
        path: "/assets/logos/csharp.png",
      },
      {
        id: 3,
        name: "Photon",
        path: "/assets/logos/photon.png",
      },
      {
        id: 4,
        name: "Blender",
        path: "/assets/logos/blender.png",
      },
    ],
  },
  {
    id: 3,
    title: "Expoingenierias Web Platform",
    description: "Web platform developed for managing the engineering projects exhibition at my university, including project registration, evaluation, and administration.",
    subDescription: [
      "Built a responsive and user-friendly interface with HTML and CSS to enhance accessibility and usability.",
      "Implemented user roles including students, teachers, judges, and administrators with tailored access and permissions.",
      "Developed interactive frontend elements with JavaScript to improve user experience.",
      "Used PHP to connect the frontend with the MySQL database, managing data such as student registrations, project details, and evaluations.",
    ],
    repository: "https://github.com/RogerHdzC/TC2005B",
    image: "/assets/projects/expoingenierias.jpg",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/logos/css.png",
      },
      {
        id: 3,
        name: "Bootstrap",
        path: "/assets/logos/bootstrap.png",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/logos/javascript.png",
      },
      {
        id: 5,
        name: "PHP",
        path: "/assets/logos/php.svg",
      },
      {
        id: 6,
        name: "MySQL",
        path: "/assets/logos/mysql.png",
      },
    ],
  },
  {
    id: 4,
    title: "Reecicla App",
    description: "Mobile app for iOS and Android developed for a recycling company; users are able to request home recycling pickups or locate drop-off points on a map.",
    subDescription: [
      "Designed and programmed the Login, Registration, News, Map, Pickups and User Profile sections, ensuring a seamless onboarding experience.",
      "Developed and implemented the authentication system across the app using Firebase for secure user management.",
      "Worked on responsiveness and UI adaptability to support multiple device types and screen sizes.",
    ],
    repository: "https://github.com/DiegoSalm522/Reecicla-App",
    image: "/assets/projects/reeciclaapp.jpg",
    tags: [
      {
        id: 1,
        name: "XCode",
        path: "/assets/logos/xcode.png",
      },
      {
        id: 2,
        name: "Swift",
        path: "/assets/logos/swift.png",
      },
      {
        id: 3,
        name: "Android Studio",
        path: "/assets/logos/androidstudio.png",
      },
      {
        id: 4,
        name: "Java",
        path: "/assets/logos/java.png",
      },
      {
        id: 5,
        name: "Firebase",
        path: "/assets/logos/firebase.png",
      },
      {
        id: 6,
        name: "Figma",
        path: "/assets/logos/figma.png",
      },
    ],
  },
  {
    id: 5,
    title: "2D Pacman",
    description: "2D recreation of the classic Pacman video game, built with OpenGL and C++.",
    subDescription: [
      "Implemented texture mapping to visually represent the maze, Pacman, and ghosts.",
      "Programmed ghost movement using basic AI algorithms for dynamic and challenging gameplay.",
      "Integrated keyboard controls for Pacman and managed character navigation using an adjacency matrix to ensure accurate path movement.",
      "Developed with OpenGL, C++, and freeglut for graphics rendering and input handling.",
    ],
    repository: "https://github.com/DiegoSalm522/Pacman",
    image: "/assets/projects/pacman.jpg",
    tags: [
      {
        id: 1,
        name: "OpenGL",
        path: "/assets/logos/opengl.png",
      },
      {
        id: 2,
        name: "Freeglut",
        path: "/assets/logos/freeglut.png",
      },
      {
        id: 3,
        name: "C++",
        path: "/assets/logos/cplusplus.png",
      },
    ],
  },
  {
    id: 6,
    title: "Bazaar Profit Management Dashboard",
    description: "System for managing the profits of a children's hospital bazaar, combining a mobile app for sellers and a web platform for administrators.",
    subDescription: [
      "Developed the frontend of the web platform using React, JavaScript, HTML, and CSS to deliver a responsive and user-friendly interface.",
      "Designed and implemented pages for administrator functionalities, including user creation, sales record viewing, and statistics display.",
      "Collaborated using tools like Figma for design and Postman for API testing.",
      "Integrated the frontend with backend services built with Django and MySQL for data management.",
    ],
    repository: "https://github.com/ErwinPo/BazarAdmin",
    image: "/assets/projects/bazar.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.png",
      },
      {
        id: 2,
        name: "Javascript",
        path: "/assets/logos/javascript.png",
      },
      {
        id: 3,
        name: "HTML",
        path: "/assets/logos/html.png",
      },
      {
        id: 4,
        name: "CSS",
        path: "/assets/logos/css.png",
      },
      {
        id: 5,
        name: "Postman",
        path: "/assets/logos/postman.png",
      },
      {
        id: 6,
        name: "Figma",
        path: "/assets/logos/figma.png",
      },
    ],
  },
  {
    id: 7,
    title: "FIFA 22 Player Database App",
    description: "Python console app to query and analyze top 100 FIFA 22 players, featuring filtering, rankings, and Matplotlib visualizations.",
    subDescription: [
      "Implemented CSV file processing to handle structured information.",
      "Designed algorithms to normalize and standardize data, improving search accuracy.",
      "Created an interactive menu and submenu system allowing filtering by country, club, position, and special attributes.",
      "Integrated data visualization to display comparisons and predefined rankings.",
    ],
    repository: "https://github.com/DiegoSalm522/FIFA-22-Player-Database-App",
    image: "/assets/projects/fifa22database.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.png",
      },
    ],
  },
  {
    id: 8,
    title: "Little Duck Compiler",
    description: "Compiler development for the mini-imperative language Little Duck, implementing lexical, syntactic, and semantic analysis phases.",
    subDescription: [
      "Designed formal grammar, semantic cube, symbol tables, and scope management for type validation and function control.",
      "Integrated ANTLR with Java for automatic lexer and parser generation.",
      "Implemented detailed error reporting to assist debugging during compilation.",
    ],
    repository: "https://github.com/DiegoSalm522/Proyecto-Patito",
    image: "/assets/projects/littleduck.jpg",
    tags: [
      {
        id: 1,
        name: "ANTLR",
        path: "/assets/logos/antlr.png",
      },
      {
        id: 2,
        name: "Java",
        path: "/assets/logos/java.png",
      },
    ],
  },
];