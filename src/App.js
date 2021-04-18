import React, { useRef, useEffect, useState } from "react";
import { styles } from "./App.css";
import Navbar from "./Navbar";

const useElementOnScreen = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  };

  const containerRef = useRef(null);

  const callbackFunction = entries => {
    const [entry] = entries;
    if (entry.isIntersecting === true) {
      const intersectedElement = entry.target.className;
      console.log("IS" + intersectedElement);
      const activeAnchor = document
        .querySelector(`[data-page=${intersectedElement}]`)
        .classList.add("mystyle");
      console.log("activeAnchor" + activeAnchor);
      console.log("entryintersect" + entry.isIntersecting);
    }
    if (entry.isIntersecting === false) {
      const intersectedElement = entry.target.className;
      const activeAnchor = document
        .querySelector(`[data-page=${intersectedElement}]`)
        .classList.remove("mystyle");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return containerRef;
};

function App() {
  const sections = document.querySelectorAll("section");
  const [section] = sections;

  const homeRef = useElementOnScreen();
  const projectRef = useElementOnScreen();
  const contactRef = useElementOnScreen();

  return (
    <div className="app">
      <Navbar />

      <main>
        <section >
          <div ref={homeRef} className="home">
            <h2>home</h2>
          </div>
        </section>
        <section >
          <div ref={projectRef} className="project">
            <h2>project</h2>
          </div>
        </section>
        <section >
          <div ref={contactRef} className="contact">
            <h2>contact</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
