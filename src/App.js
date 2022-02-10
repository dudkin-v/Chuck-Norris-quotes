import { useState, useEffect, useCallback } from "react";

import { CategoriesList } from "./components/CategoriesList";

import "./App.css";

const App = () => {
  const [API_URL, setAPI_URL] = useState(
    "https://api.chucknorris.io/jokes/random"
  );
  const [categories, setCategories] = useState([]);
  const [quote, setQuote] = useState("");
  const [logoSrc, setLogoSrc] = useState("");

  const fetchLogoSrc = useCallback(async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setLogoSrc(data.icon_url);
  }, []);

  const fetchCategories = useCallback(async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/categories");
    const data = await response.json();
    setCategories([...data, "random"]);
  }, []);

  const fetchQuote = useCallback(async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setQuote(data.value);
  }, [API_URL]);

  useEffect(() => {
    fetchQuote().catch();
  }, [API_URL]);

  useEffect(() => {
    fetchLogoSrc().catch();
    fetchCategories().catch();
  }, []);

  const handleClick = (category) => () => {
    if (category !== "random") {
      if (API_URL.includes(category)) fetchQuote();
      setAPI_URL(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
    } else {
      fetchQuote();
    }
  };

  return (
    <div className="app">
      <header className="header">
        <img className="logo" src={logoSrc} alt="Chuck Norris" />
        <h1>Chuck Norris</h1>
      </header>
      <CategoriesList categories={categories} handleClick={handleClick} />
      <div className="quote-block">
        <div className="quote">
          <p className="quote-text">{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
