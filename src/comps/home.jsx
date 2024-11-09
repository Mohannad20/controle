import React from "react";
import expertsData from "../expertsData.js";
// import Expert from "./expert.jsx";
import Experts1 from "./experts1.jsx";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {expertsData.map((expert) => (
        <Experts1 key={expert.id} expert={expert} />
      ))}
    </div>
  );
};

export default Home;