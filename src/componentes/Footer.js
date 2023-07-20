import React from "react";
import FooterLinksData from "./data/FooterLinks.json"

const Footer = () => {
    return(
        <footer className="scene">
            <article className="content">
                <div id="socialmedia">
                    <ul className="group">
                        {
                            FooterLinksData.map((linke) => 
                                <li><a href={linke.href}><img className="icon" src={linke.src} alt={linke.alt}/></a></li>
                            )
                        }
                    </ul>      
                </div>
            </article>
        </footer>
    )
}

export default Footer;