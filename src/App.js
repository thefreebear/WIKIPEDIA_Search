import React from "react";
import Accordion from "./components/Accordion";
import Search from './components/Search';

const items = [
  {
    title: "What is react?",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use react?",
    content: "React is a favorite js liberary among engineers",
  },
  {
    title: "How do you use react?",
    content: "You can use react by creating components",
  },
];
export default () => {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  );
};
