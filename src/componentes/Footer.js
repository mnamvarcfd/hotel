import React from "react";
import FooterLinksData from "./data/footer_links.json"

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
                        {/* <li><a href="https://twitter.com"><img className="icon" src="https://landonhotel.com/images/socialmedia/twitter.png" alt="icon for twitter"/></a></li> */}
                        {/* <li><a href="http://www.facebook.com"><img className="icon" src="https://landonhotel.com/images/socialmedia/facebook.png" alt="icon for facebook"/></a></li> */}
                        {/* <li><a href="http://www.youtube.com"><img className="icon" src="https://landonhotel.com/images/socialmedia/youtube.png" alt="icon for youtube"/></a></li>     */}
                    </ul>      
                </div>
            </article>
        </footer>
    )
}

export default Footer;