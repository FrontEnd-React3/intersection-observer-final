import React from "react";

function Navbar() {
  return (
    <header className="NVB__header">
      <nav className="NVB__nav" >
        <ul className="NVB__ul" >
          <li className="NVB__ulli" >
            <a className="NVB__navitem" id="home" data-page="home" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="NVB__navitem" id="project" data-page="project" href="#">
              Project
            </a>
          </li>
          <li>
            <a className="NVB__navitem" id="contact" data-page="contact" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
