import { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

export default function App() {
  const [actors, setActors] = useState([]);

  const fetchActors = async () => {
    try {
      const response = await axios.get(
        "https://lanciweb.github.io/demo/api/actors/",
      );
      setActors(response.data);
    } catch (error) {
      console.error("Errore nel caricamento:", error);
    }
  };

  useEffect(() => {
    fetchActors();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Lista Attori</h1>
      <div className="row row-cols-3 g-4">
        {actors.map((actor) => (
          <div className="col" key={actor.id}>
            <div className="card h-100">
              <img
                src={actor.image}
                className="card-img-top"
                alt={actor.name}
                style={{ height: "300px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{actor.name}</h5>
                <p className="card-text">
                  <strong>Anno di nascita: </strong>
                  {actor.birth_year}
                </p>
                <p className="card-text">
                  <strong>Nazionalità: </strong>
                  {actor.nationality}
                </p>
                <p className="card-text">
                  <strong>Biografia: </strong>
                  {actor.biography}
                </p>
                <p className="card-text">
                  <strong>Riconoscimenti:</strong>
                </p>
                <ul>
                  {actor.awards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
