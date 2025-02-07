const url = "/assets/tech/";

export const technologies = [
  {
    name: "HTML",
    icon: `${url}html.png`,
  },
  {
    name: "CSS",
    icon: `${url}css.png`,
  },
  {
    name: "JavaScript",
    icon: `${url}javascript.png`,
  },
  {
    name: "TypeScript",
    icon: `${url}typescript.png`,
  },
  {
    name: "React JS",
    icon: `${url}reactjs.png`,
  },
  {
    name: "Next JS",
    icon: `${url}nextjs.png`,
  },
  {
    name: "Three JS",
    icon: `${url}threejs.png`,
  },
  {
    name: "Redux Toolkit",
    icon: `${url}redux.png`,
  },
  {
    name: "Firebase",
    icon: `${url}firebase.svg`,
  },
  {
    name: "Tailwind CSS",
    icon: `${url}tailwind.png`,
  },
  {
    name: "Bootstrap",
    icon: `${url}bootstrap.png`,
  },
  // {
  //   name: "DaisyUI",
  //   icon: `${url}daisyui.svg`,
  // },
  // {
  //   name: "Aceternity UI",
  //   icon: `${url}aceternity.png`,
  // },
  // {
  //   name: "git",
  //   icon: `${url}git.png`,
  // },
  // {
  //   name: "figma",
  //   icon: `${url}figma.png`,
  // },
];

export const myProjects = [
  {
    title: "RoomCraft - 3D Room Designer",
    desc: "RoomCraft is an innovative platform that simplifies room planning and interior design in a 3D environment. With interactive features like furniture selection, position adjustments, and real-time design visualization, users can effortlessly create their dream spaces without needing professional design skills.",
    subdesc:
      "Built as a web-based application using React, Tailwind CSS, Redux, and React Three Fiber, RoomCraft delivers a responsive and intuitive design experience. Integrated with Firebase for authentication and data storage, this platform is designed to be easily accessible to all users.",
    href: "https://room-craft-three.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/projects/logo1.svg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/projects/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/tech/reactjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tech/tailwind.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/tech/javascript.png",
      },
      {
        id: 4,
        name: "Threejs",
        path: "/assets/tech/threejs.png",
      },
    ],
  },
  {
    title: "NewsAcquire - Real-Time News Aggregator",
    desc: "NewsAcquire is an advanced news aggregation platform that delivers the latest news from multiple sources in real-time. It provides users with a comprehensive and up-to-date view of current events, ensuring they never miss a story.",
    subdesc:
      "Powered by Next.js, NewsAcquire revolutionizes the way users consume news by offering a seamless, responsive, and personalized experience. From politics to technology, business to entertainment, it brings the latest headlines directly to your fingertips with an intuitive and modern interface.",
    href: "https://news-acquire.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/projects/logo2.png",
    logoStyle: {
      backgroundColor: "#ffffff",
      background:
        "linear-gradient(90deg, #ffffff, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/projects/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/tech/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tech/tailwind.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/tech/typescript.png",
      },
      {
        id: 4,
        name: "DaisyUI",
        path: "/assets/tech/daisyui.svg",
      },
    ],
  },
  {
    title: "OfficeNest - Your One-Stop Shop for Office & Stationary Essentials",
    desc: "OfficeNest is a comprehensive e-commerce platform that offers a wide range of stationery and office tools. From pens and notebooks to office furniture and electronics, OfficeNest provides everything you need to keep your workspace well-equipped and efficient.",
    subdesc:
      "Built with React, JavaScript, Tailwind CSS, and Redux, OfficeNest offers a fast, secure, and seamless shopping experience. With intuitive navigation and powerful state management, finding and purchasing office supplies is effortless.",
    href: "https://react-phase2-fauzan.web.app/client/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/projects/logo3.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/projects/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/tech/reactjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tech/tailwind.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/tech/javascript.png",
      },
      {
        id: 4,
        name: "Redux",
        path: "/assets/tech/redux.png",
      },
    ],
  },
  {
    title: "PokéVerse - Your Ultimate Guide to the World of Pokémon",
    desc: "PokéVerse is a feature-rich Pokédex web app that provides detailed information on every Pokémon, including stats, abilities, evolutions, and more. Whether you're a casual fan or a dedicated trainer, PokéVerse makes exploring the Pokémon world easy and interactive.",
    subdesc:
      "Built with React.js, Bootstrap, React-Bootstrap, and JavaScript, PokéVerse delivers a sleek and responsive interface for seamless browsing. With intuitive design and real-time search functionality, finding your favorite Pokémon has never been easier!",
    href: "https://react-pokeverse-fkr.web.app/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/projects/logo4.svg",
    logoStyle: {
      backgroundColor: "#2c0e0e",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/projects/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/tech/reactjs.png",
      },
      {
        id: 2,
        name: "Bootstrap",
        path: "/assets/tech/bootstrap.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/tech/javascript.png",
      },
      {
        id: 4,
        name: "React Bootstrap",
        path: "/assets/tech/reactbootstrap.png",
      },
    ],
  },
  {
    title: "MovieTime - Your Ultimate Movie Database",
    desc: "MovieTime is a dynamic movie discovery platform that lets users explore a vast collection of films, from the latest blockbusters to timeless classics. With detailed information on cast, genres, ratings, and many more, MovieTime is the perfect destination for movie enthusiasts.",
    subdesc:
      "Built with React.js, Bootstrap, and JavaScript, MovieTime offers a sleek, responsive, and user-friendly interface. Whether you're searching for your next watch or diving into movie details, MovieTime provides a seamless and engaging experience.",
    href: "https://react-movie-time.web.app/",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/projects/logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/projects/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/tech/reactjs.png",
      },
      {
        id: 2,
        name: "Bootstrap",
        path: "/assets/tech/bootstrap.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/tech/javascript.png",
      },
    ],
  },
];

export const myExperiences = [
  {
    id: 1,
    name: "Hacktiv8 Bootcamp",
    pos: "Frontend Developer",
    duration: "Sep 2024 - Jan 2025",
    title:
      "Hacktiv8 is a coding bootcamp where I gained intensive training in front-end development, focusing on technologies like React, JavaScript, and CSS. I worked on several projects including building websites and applications, while honing my skills in teamwork and problem-solving.",
    icon: "/assets/company/hacktiv.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "PT Integra Solusi Mandiri",
    pos: "Software Developer Internship",
    duration: "Jan 2022 - Jul 2022",
    title:
      "Developed an internal mobile app to improve internal operations. Worked on app architecture, feature implementation, and testing, gaining hands-on experience in mobile app development.",
    icon: "/assets/company/ism.png",
    animation: "salute",
  },
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];
