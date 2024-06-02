import { Question } from "@/types/Question";

export const questions: Question[] = [
  {
    question:
      "Which hook would you use to manage state in a functional component?",
    options: [
      { text: "useEffect", isCorrect: false },
      { text: "useContext", isCorrect: false },
      { text: "useReducer", isCorrect: false },
      { text: "useState", isCorrect: true },
      { text: "useMemo", isCorrect: false },
    ],
  },

  {
    question: "What is the correct way to handle form submission in React?",
    options: [
      { text: "By using onClick handler on a button", isCorrect: false },
      { text: "By using onChange handler on input fields", isCorrect: false },
      { text: "By using onSubmit handler on a form", isCorrect: true },
      { text: "By using onSubmit handler on a button", isCorrect: false },
      { text: "By using onChange handler on a form", isCorrect: false },
    ],
  },

  {
    question: "What does the key prop do in a list of React elements?",
    options: [
      {
        text: "It gives a unique identifier to each element in the list",
        isCorrect: true,
      },
      { text: "It binds data to each element in the list", isCorrect: false },
      { text: "It adds a key attribute to the DOM element", isCorrect: false },
      { text: "It sets a reference to the DOM element", isCorrect: false },
      {
        text: "It specifies the index of the element in the list",
        isCorrect: false,
      },
    ],
  },

  {
    question:
      "In React, how do you pass data from a parent component to a child component?",
    options: [
      { text: "Using state", isCorrect: false },
      { text: "Using props", isCorrect: true },
      { text: "Using context", isCorrect: false },
      { text: "Using hooks", isCorrect: false },
      { text: "Using ref", isCorrect: false },
    ],
  },

  {
    question: "How can you create a context in React?",
    options: [
      { text: "React.createContext()", isCorrect: true },
      { text: "React.useContext()", isCorrect: false },
      { text: "React.makeContext()", isCorrect: false },
      { text: "React.newContext()", isCorrect: false },
      { text: "React.initContext()", isCorrect: false },
    ],
  },

  {
    question: "What is the primary purpose of the useEffect hook in React?",
    options: [
      { text: "To handle state management", isCorrect: false },
      { text: "To fetch data from an API", isCorrect: false },
      {
        text: "To perform side effects in function components",
        isCorrect: true,
      },
      { text: "To create context for the application", isCorrect: false },
      { text: "To handle routing between pages", isCorrect: false },
    ],
  },
  {
    question:
      "What is the correct way to write a conditional rendering in JSX?",
    options: [
      { text: "{ condition ? <Component /> : null }", isCorrect: true },
      { text: "{ if (condition) { <Component /> } }", isCorrect: false },
      { text: "{ condition && <Component /> }", isCorrect: false },
      { text: "{ <Component condition={condition} /> }", isCorrect: false },
      { text: "{ <Component condition /> }", isCorrect: false },
    ],
  },

  {
    question: "Which operator can be used to conditionally render a React component?",
    options: [
      {
        text: "::",
        isCorrect: false,
      },
      { text: "??", isCorrect: false },
      {
        text: "&&",
        isCorrect: true,
      },
      {
        text: "||",
        isCorrect: false,
      },
      {
        text: "++",
        isCorrect: false,
      },
    ],
  },

  {
    question: "What is the purpose of React.Fragment?",
    options: [
      {
        text: "To group multiple elements without adding extra nodes to the DOM",
        isCorrect: true,
      },
      {
        text: "To render a single element without any parent container",
        isCorrect: false,
      },
      {
        text: "To provide a placeholder for asynchronous data",
        isCorrect: false,
      },
      {
        text: "To define the root of a React component tree",
        isCorrect: false,
      },
      { text: "To optimize rendering performance in React", isCorrect: false },
    ],
  },

  {
    question: "What is the purpose of the 'children' prop in React components?",
    options: [
      {
        text: "To access and render the child elements of a component",
        isCorrect: true,
      },
      {
        text: "To pass data from parent to child components",
        isCorrect: false,
      },
      { text: "To define the content of a component", isCorrect: false },
      { text: "To specify the layout of child components", isCorrect: false },
      { text: "To handle events in child components", isCorrect: false },
    ],
  },
];
