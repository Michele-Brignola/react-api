import { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

export default function App() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get(
          "https://lanciweb.github.io/demo/api/actors/",
        );
        console.log("Lista attori:", response.data);
        setActors(response.data);
      } catch (error) {
        console.error("Errore nel caricamento:", error);
      }
    };
    fetchActors();
  }, []);

  return <></>;
}
