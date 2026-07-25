import ploutosImg from "@/assets/ploutos.jpg";
import quiznowImg from "@/assets/quiznow.jpg";
import weathernowImg from "@/assets/weathernow.jpg";
import habitualImg from "@/assets/habitual.jpg";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  cover: string;
  coverAlt: string;
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
  features: string[];
  engineeringNote: {
    title: string;
    body: string;
  };
  challenges: string[];
  lessons: string[];
  future: string[];
};

export const projects: Project[] = [
  {
    slug: "ploutos",
    name: "Ploutos",
    tagline: "Helping people understand where their money goes.",
    description:
      "A personal finance dashboard built to help users track income, expenses, budgets and financial progress through a simple, intuitive interface.",

    year: "2026",

    role: "Product Design & Frontend Development",

    stack: ["HTML", "CSS", "JavaScript", "Local Storage"],

    cover: ploutosImg,

    coverAlt:
      "Ploutos personal finance dashboard displayed inside a MacBook mockup.",

    liveUrl: "https://ploutos-finance.netlify.app/",

    githubUrl: "https://github.com/genius-el/ploutos",

    problem:
      "Many people struggle to keep track of their finances because existing tools often feel too complex or overwhelming. I wanted to build something that felt simple enough for everyday use while still providing useful insights.",

    solution:
      "Ploutos combines transaction management, budgeting, analytics and search into one responsive dashboard that stores data locally, allowing users to manage their finances without creating an account.",

    features: [
      "Income and expense tracking",
      "Budget creation and monitoring",
      "Transaction CRUD operations",
      "Analytics dashboard with charts",
      "Real-time transaction search",
      "Dark mode",
      "Currency preferences",
      "Responsive design",
      "Local Storage persistence"
    ],

    engineeringNote: {
      title: "Learning how data flows through an application",

      body:
        "Ploutos completely changed how I think about building software. It taught me that applications are more than interfaces—they're systems where data constantly moves between different parts of the application. I learned how to manage application state, persist data with Local Storage, update the UI dynamically after every user action, and use array methods like map(), filter() and reduce() to derive meaningful insights from raw transaction data."
    },

    challenges: [
      "Keeping the dashboard synchronized whenever transactions were added, edited or deleted.",
      "Designing analytics that automatically updated whenever the underlying data changed.",
      "Structuring the application so features remained easy to extend."
    ],

    lessons: [
      "Building software becomes much easier when you understand how data flows through the application.",
      "Simple user experiences usually require thoughtful engineering behind the scenes.",
      "Planning application structure early makes future features easier to implement."
    ],

    future: [
      "Export transactions",
      "Cloud synchronization",
      "Authentication",
      "Recurring transactions",
      "Advanced financial reports"
    ],
  },
  {
    slug: "quiznow",

    name: "QuizNow",

    tagline: "Making learning more interactive through quizzes.",

    description:
      "An interactive quiz application that retrieves real-time questions from the Open Trivia Database API while providing a fast, engaging user experience.",

    year: "2026",

    role: "Product Design & Frontend Development",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Open Trivia Database API"
    ],

    cover: quiznowImg,

    coverAlt:
      "QuizNow quiz application displayed across desktop and mobile devices.",

    liveUrl: "https://thequiz-now.netlify.app/",

    githubUrl: "https://github.com/genius-el/quiz-now",

    problem:
      "I wanted to understand how modern web applications communicate with external APIs while creating something that was enjoyable to use.",

    solution:
      "QuizNow fetches live quiz questions from the Open Trivia Database API, allowing users to choose categories, answer timed questions and receive immediate feedback on their performance.",

    features: [
      "Live API integration",
      "Category selection",
      "Difficulty selection",
      "Question timer",
      "Score tracking",
      "Responsive design",
      "Play again functionality"
    ],

    engineeringNote: {
      title: "My first experience working with APIs",

      body:
        "QuizNow introduced me to asynchronous JavaScript. I learned how to fetch data from APIs, work with async/await, handle loading states and manage asynchronous application flow. It also challenged me to think carefully about timers, user interactions and updating the interface as data arrived."
    },

    challenges: [
      "Managing quiz timers alongside asynchronous API requests.",
      "Handling HTML entities returned by the API.",
      "Keeping score calculations accurate throughout the quiz."
    ],

    lessons: [
      "Building applications with APIs requires thinking differently from static websites.",
      "Error handling is just as important as displaying successful results.",
      "Small interaction details significantly improve user experience."
    ],

    future: [
      "Leaderboard",
      "User accounts",
      "Custom quizzes",
      "Quiz history"
    ],
  },
  {
    slug: "weathernow",

    name: "WeatherNow",

    tagline: "Real-time weather information made simple.",

    description:
      "A weather application that retrieves current weather conditions from the OpenWeatherMap API through a clean, responsive interface.",

    year: "2026",

    role: "Product Design & Frontend Development",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "OpenWeatherMap API"
    ],

    cover: weathernowImg,

    coverAlt:
      "WeatherNow weather application displayed inside a laptop mockup.",

    liveUrl: "https://theweather-now.netlify.app/",

    githubUrl: "https://github.com/genius-el/WeatherNow",

    problem:
      "Weather information should be quick to access and easy to understand without unnecessary complexity.",

    solution:
      "WeatherNow allows users to search cities around the world and instantly view current weather conditions using live data from the OpenWeatherMap API.",

    features: [
      "City search",
      "Current weather conditions",
      "Temperature display",
      "Weather icons",
      "Responsive interface",
      "API-powered live data"
    ],

    engineeringNote: {
      title: "Understanding asynchronous programming",

      body:
        "WeatherNow strengthened my understanding of asynchronous JavaScript. Building this project helped me become more comfortable working with REST APIs, handling JSON data, managing loading states and displaying information dynamically as soon as responses were received."
    },

    challenges: [
      "Handling invalid city searches gracefully.",
      "Working with different API response structures.",
      "Displaying weather information in a clean, readable format."
    ],

    lessons: [
      "Good user experience includes preparing for things that can go wrong.",
      "External APIs don't always return the data you expect.",
      "Simple interfaces often communicate information more effectively."
    ],

    future: [
      "Weather forecast",
      "Geolocation support",
      "Favorite cities",
      "Dark mode themes"
    ],
  },
  {
    slug: "habitual",

    name: "Habitual",

    tagline: "Helping users focus on what matters most.",

    description:
      "A productivity application built around the Eisenhower Matrix to help users organize tasks based on urgency and importance.",

    year: "2026",

    role: "Product Design & Frontend Development",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Local Storage"
    ],

    cover: habitualImg,

    coverAlt:
      "Habitual productivity application displayed on desktop and mobile devices.",

    liveUrl: "https://thehabitual.netlify.app/",

    githubUrl: "https://github.com/genius-el/habitual",

    problem:
      "Many task management applications become cluttered over time, making it difficult for users to identify what deserves their attention first.",

    solution:
      "Habitual organizes tasks automatically using the Eisenhower Matrix while saving all user data locally so tasks remain available even after refreshing the browser.",

    features: [
      "Task management",
      "Automatic Eisenhower Matrix categorization",
      "Local Storage persistence",
      "Responsive design",
      "Task editing",
      "Task deletion"
    ],

    engineeringNote: {
      title: "My introduction to application architecture",

      body:
        "Habitual was one of the projects that taught me to think beyond individual functions and begin structuring applications as connected systems. I learned how to organize JavaScript into reusable modules, persist data using Local Storage and dynamically render different sections of the interface based on changing application state."
    },

    challenges: [
      "Correctly categorizing tasks into their respective quadrants.",
      "Keeping Local Storage synchronized with user actions.",
      "Designing an interface that remained simple despite multiple task categories."
    ],

    lessons: [
      "Application architecture becomes increasingly important as projects grow.",
      "Reusable code makes future improvements much easier.",
      "Building products requires balancing technical implementation with user experience."
    ],

    future: [
      "Due dates",
      "Notifications",
      "Recurring tasks",
      "Cloud synchronization"
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
