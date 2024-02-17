import React from "react";
import Header from "../components/header"

const LatestNews = () => {
    return (
        <>
        <center>
          <br />
  
          <a href="latest-news.html" className="sub-heading-labels">Latest News</a>
  
          <br /><br />
  
          <div id="news">
            <div className="news-articles">
              <a href="https://www.google.com/search?q=rasmus">
                <img border="0" src="latest-news-1.jpg" width="500" height="300" />
                <h3>Højlund with 5 goals in 5 games!</h3>
              </a>
            </div>
            <div className="news-articles">
              <a href="https://www.google.com/search?q=bukayo">
                <img border="0" src="latest-news-2.jpg" width="500" height="300" />
                <h3>Saka stars as Arsenal ease past West Ham!</h3>
              </a>
            </div>
            <div className="news-articles">
              <a href="https://www.google.com/search?q=erling">
                <img border="0" src="latest-news-3.jpg" width="500" height="300" />
                <h3>Haaland scores brace as title race heats up!</h3>
              </a>
            </div>
            <div className="news-articles">
              <a href="https://www.google.com">
                <img border="0" src="latest-news-4.jpg" width="500" height="300" />
                <h3>Sensational goal from Garnacho!</h3>
              </a>
            </div>
          </div>
          {/* <nav>
  
          <Link to="/latest-news" id="more-news-button">See more...
          </Link> 
          </nav> */}
        </center>
      </>
    );
};
 
export default LatestNews;