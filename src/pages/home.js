import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

const Home = () => {
  useEffect(() => {
    document.getElementById("title").innerText = "Home"
    readAllActors();
    readAllFilms();
    readCategories();
  }, []);

  const [actorDetails, setActorDetails] = useState(null);
  const [filmDetails, setFilmDetails] = useState(null);
  const [categoryDetails, setCategoryDetails] = useState(null);

  if (actorDetails === null || filmDetails === null) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <section>
      <center>
        <br />
        <HomeActors />
        <HomeFilms />
        <HomeCategories />
      </center>
    </section>
  );

  async function readAllFilms() {
    const apiURL = "http://13.51.175.213:8080/home/allFilms";

    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFilmDetails(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  }
  async function readAllActors() {
    const apiURL = "http://13.51.175.213:8080/home/allActors";

    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setActorDetails(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  }
  async function readCategories() {
    const apiURL = "http://13.51.175.213:8080/home/allCategories";

    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Issue with Network');
        }
        return response.json();
      })
      .then(data => {
        setCategoryDetails(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  }
  function HomeActors() {
    return (
      <center>
        <div>
          <Link to="/actors" className="sub-heading-labels">Featured Actors</Link>
        </div>
        <div id="actors">
          <div className="home-profile">
            <a href="/actor/1">
              <img border="0" src="actor-image.jpg" width="240" height="240" />
              <h3>{actorDetails[0].firstName} {actorDetails[0].lastName}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/actor/2">
              <img border="0" src="actor-image.jpg" width="240" height="240" />
              <h3>{actorDetails[1].firstName} {actorDetails[1].lastName}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/actor/3">
              <img border="0" src="actor-image.jpg" width="240" height="240" />
              <h3>{actorDetails[2].firstName} {actorDetails[2].lastName}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/actor/4">
              <img border="0" src="actor-image.jpg" width="240" height="240" />
              <h3>{actorDetails[3].firstName} {actorDetails[3].lastName}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/actor/5">
              <img border="0" src="actor-image.jpg" width="240" height="240" />
              <h3>{actorDetails[4].firstName} {actorDetails[4].lastName}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/actor/6">
              <img border="0" src="actor-image.jpg" width="240" height="240" />
              <h3>{actorDetails[5].firstName} {actorDetails[5].lastName}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/actor/7">
              <img border="0" src="actor-image.jpg" width="240" height="240" />
              <h3>{actorDetails[6].firstName} {actorDetails[6].lastName}</h3>
            </a>
          </div>
        </div>

        <Link to="/actors" className="see-more-button">More Actors
        </Link>
      </center>
    );
  }
  function HomeFilms() {

    return (
      <>
        <Link to="/films" id="matches-link" className="sub-heading-labels">Featured Films</Link>
        <div id="films">
          <div className="home-profile">
            <a href="/film/1">
              <img border="0" src="film-image.jpg" width="240" height="240" />
              <h3>{filmDetails[0].title}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/film/2">
              <img border="0" src="film-image.jpg" width="240" height="240" />
              <h3>{filmDetails[1].title}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/film/3">
              <img border="0" src="film-image.jpg" width="240" height="240" />
              <h3>{filmDetails[2].title}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/film/4">
              <img border="0" src="film-image.jpg" width="240" height="240" />
              <h3>{filmDetails[3].title}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/film/5">
              <img border="0" src="film-image.jpg" width="240" height="240" />
              <h3>{filmDetails[4].title}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/film/6">
              <img border="0" src="film-image.jpg" width="240" height="240" />
              <h3>{filmDetails[5].title}</h3>
            </a>
          </div>
        </div>
        <Link to="/matches" className="see-more-button">More Films
        </Link>
      </>
    )
  }
  function HomeCategories() {
    return (
      <>
        <div>
          <Link to="/categories" id="players-link" className="sub-heading-labels">Categories</Link>
        </div>

        <div id="categories">
          <div className="home-profile">
            <a href="/category/1">
              <img border="0" src="category-image.jpg" width="240" height="240" />
              <h3>{categoryDetails[0].categoryName}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/category/2">
              <img border="0" src="category-image.jpg" width="240" height="240" />
              <h3>{categoryDetails[1].categoryName}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/category/3">
              <img border="0" src="category-image.jpg" width="240" height="240" />
              <h3>{categoryDetails[2].categoryName}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/category/4">
              <img border="0" src="category-image.jpg" width="240" height="240" />
              <h3>{categoryDetails[3].categoryName}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/category/5">
              <img border="0" src="category-image.jpg" width="240" height="240" />
              <h3>{categoryDetails[4].categoryName}</h3>
            </a>
          </div>
          <div className="home-profile">
            <a href="/category/6">
              <img border="0" src="category-image.jpg" width="240" height="240" />
              <h3>{categoryDetails[5].categoryName}</h3>
            </a>
          </div>
        </div>
        <Link to="/categories" className="see-more-button">More Categories
        </Link>
      </>
    )
  }

}
export default Home;
