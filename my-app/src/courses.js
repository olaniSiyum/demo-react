const courses = [
    {
      id: 1,
      title: "Introduction to React Native",
      instructor: 'John Doe', // Name of the course instructor
      description: "Learn the basics of React Native development and build your first mobile app.",
      enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
      thumbnail: 'logo.svg',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content: 'Overview of React Native, setting up your development environment.'
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content: 'Creating a simple mobile app using React Native components.'
        },// Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: 'Alice Johnson',
          email: 'alice@example.com',
        },
        {
          id: 102,
          name: 'Bob Smith',
          email: 'bob@example.com',
        },// Additional enrolled students...
      ],
      lessons: [
        {
          id: 1,
          title: "Welcome to the course",
          description: "React is a JavaScript library for building user interfaces. it is used to build single-page applications. it also allows us to create reusable UI components.",
          vimeoId: 76979871
        },
        {
          id: 2,
          title: "React Getting Started",
          description: "To use React in production, you need npm which is included with Node.js.",
          vimeoId: 76979871
        },
        {
          id: 3,
          title: "What is ES6?",
          description: "ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.",
          vimeoId: 76979871
        },
        {
          id: 4,
          title: "React Render HTML",
          description: "React's goal is in many ways to render HTML in a web page.",
          vimeoId: 76979871
        }
      ]
    },
    {
      id: 2,
      title: "Node.js Tutorial",
      description: "Node.js is an open source server environment.",
      lessons: [
        {
          id: 1,
          title: "Welcome to the course",
          description: "Node.js allows you to run JavaScript on the server.",
          vimeoId: 76979871
        },
        {
          id: 2,
          title: "Node.js Get Started",
          description: "The official Node.js website has installation instructions for Node.js: https://nodejs.org",
          vimeoId: 76979871
        },
        {
          id: 3,
          title: "Node.js Modules",
          description: "Consider modules to be the same as JavaScript libraries. A set of functions you want to include in your application.",
          vimeoId: 76979871
        },
        {
          id: 4,
          title: "Node.js HTTP Module",
          description: "Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).",
          vimeoId: 76979871
        }
      ]
    },
    {
      id: 3,
      title: "HTML Tutorial",
      description: "With HTML you can create your own Website.",
      lessons: [
        {
          id: 1,
          title: "Welcome to the course",
          description: "HTML is the standard markup language for Web pages.",
          vimeoId: 76979871
        },
        {
          id: 2,
          title: "HTML Introduction",
          description: "HTML stands for Hyper Text Markup Language. HTML stands for Hyper Text Markup Language",
          vimeoId: 76979871
        }
      ]
    },
    {
      id: 4,
      title: "CSS Tutorial",
      description: "CSS is the language we use to style an HTML document.",
      lessons: [
        {
          id: 1,
          title: "Welcome to the course",
          description: "CSS stands for Cascading Style Sheets",
          vimeoId: 76979871
        },
        {
          id: 2,
          title: "CSS Syntax",
          description: "A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style.",
          vimeoId: 76979871
        }
      ]
    },
    {
      id: 5,
      title: "JavaScript Tutorial",
      description: "JavaScript is the world's most popular programming language.",
      lessons: [
        {
          id: 1,
          title: "Welcome to the course",
          description: "One of many JavaScript HTML methods is getElementById().",
          vimeoId: 76979871
        },
        {
          id: 2,
          title: "JavaScript Introduction",
          description: "JavaScript and Java are completely different languages, both in concept and design. JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.",
          vimeoId: 76979871
        },
      ]
    }
  ]
  
  export default courses