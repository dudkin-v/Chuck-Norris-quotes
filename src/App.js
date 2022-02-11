import { useState, useEffect, useCallback } from "react";

import { CategoriesList } from "./components/CategoriesList";

import "./App.css";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [quote, setQuote] = useState("");
  const [logoSrc, setLogoSrc] = useState("");
  const RANDOM_URL = "https://api.chucknorris.io/jokes/random";
  const CATEGORY_URL = "https://api.chucknorris.io/jokes/random?category=";

  const fetchLogoSrc = useCallback(async () => {
    const response = await fetch(RANDOM_URL);
    const data = await response.json();
    setLogoSrc(data.icon_url);
  }, []);

  const fetchCategories = useCallback(async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/categories");
    const data = await response.json();
    setCategories([...data, "random"]);
  }, []);

  const fetchQuote = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setQuote(data.value);
  };

  useEffect(() => {
    fetchLogoSrc().catch();
    fetchCategories().catch();
    fetchQuote(RANDOM_URL);
  }, []);

  const handleClick = (category) => () => {
    fetchQuote(category === "random" ? RANDOM_URL : CATEGORY_URL + category);
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
