import React, { useState, useEffect } from "react";

// Custom hook to load menu links data
const useData = (rout) => {

  const [data, setData] = useState([]);

  const loadData = async () => {
    const url = "https://gomardk0q5.execute-api.ca-central-1.amazonaws.com/production/";
    const res = await fetch(url + rout);
    let jsonData = await res.json();
    setData(jsonData);
  };

  useEffect(() => {
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};

const Header = () => {

  const rout = "MenuLinks";

  // Using the custom hook to get menu links data
  const menuLinksData = useData(rout);

  return (
    <header id="intro">
    <article className="fullheight">
      <div className="hgroup">
        <h1>Landon Hotel website</h1>
        <h2>West London</h2>
        <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow"/></a></p>
      </div>
    </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
          <ul>
            {menuLinksData.map((link) => (
              <li key={link.id}>
                <a className={`icon ${link.class}`} href={link.href}>
                  <span>{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
