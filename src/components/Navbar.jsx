import { useState } from "react";

import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/about-us`}>About Us</Link>
        </li>
        <li>
          <Link to={`/feasibility`}>Feasibility Study</Link>
        </li>
        <li>
          <Link to={`/marketing`}> Marketing and Branding Strategy</Link>
        </li>
        <li>
          <Link to={`/partnership`}>Partnership Program</Link>
        </li>
        <li>
          <Link to={`/events`}>Cultural Events and Initiatives</Link>
        </li>
        <li>
          <Link to={`/contact-us`}>Contact Us</Link>
        </li>
        <li>
          <Link to={`/resources`}>Resources</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
