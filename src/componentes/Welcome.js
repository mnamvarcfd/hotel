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


const Welcome = () => {

    const rout = "WelcomPhotoes";

    // Using the custom hook to get menu links data
    const welcomPhoto = useData(rout);

    return(
        <div className="scene" id="welcome">
          <article className="content">

            <div className="gallery">
              {
                welcomPhoto.map((link) => 
                  <img src={link.src} alt={link.alt}/>
                )
              }
            </div>
            
            <h1>Welcome to the Landon&nbsp;Hotel.</h1>

            <p>
              The original Landon perseveres after 50 years in the heart of West London. The West End 
              neighborhood has something for everyone—from theater to dining to historic sights. 
              And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over 
              drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in 
              the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download 
              our handy information sheet</a>.
              </p>

          </article>
      </div>
    )
}

export default Welcome;
