// Home.js
import React from "react";
import Navbar from "../component/Navbar";
import Animate from "../component/Animation";
import Experience from "../component/Experience";


function Home() {
  return (
    <div>
      <div className="bg-grey-500">
        <Navbar />

        <section id="home" className="h-screen">
          <Animate />
        </section>

        <section id="experience" className="h-screen">
          <Experience />
        </section>
      </div>
    </div>
  );
}

export default Home;
