import React, { useRef, useEffect, useState } from "react";
import { styles } from "./App.css";

const useElementOnScreen = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  };

  const containerRef = useRef(null);

  const callbackFunction = entries => {
    const [entry] = entries;
    if (entry.isIntersecting===true) {
      const intersectedElement = entry.target.className;
      console.log("IS" + intersectedElement);
      const activeAnchor = (document.querySelector(`[data-page=${intersectedElement}]`)).classList.add("mystyle");
      console.log("activeAnchor" + activeAnchor);
      console.log("entryintersect" + entry.isIntersecting);
    }
    if (entry.isIntersecting===false) {
      const intersectedElement = entry.target.className;
      const activeAnchor = (document.querySelector(`[data-page=${intersectedElement}]`)).classList.remove("mystyle");
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
      <header>
        <nav>
          <ul>
            <li   dta-page="home">
              <a className="ahome" id="home" data-page="home" href="#">
                Home
              </a>
            </li>
            <li  dta-page="project">
              <a  className="aproject" id="project" data-page="project" href="#">
                Project
              </a>
            </li>
            <li   dta-page="contact">
              <a  className="acontact" id="contact" data-page="contact" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section data-index="0" className="intersection">
          <div ref={homeRef} className="home">
            <h2>home</h2>
          </div>
        </section>
        <section data-index="1" className="intersection">
          <div ref={projectRef} className="project">
            <h2>project</h2>
          </div>
        </section>
        <section data-index="2" className="intersection">
          <div ref={contactRef} className="contact">
            <h2>contact</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
