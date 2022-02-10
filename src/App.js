import { useState, useEffect, useCallback } from "react";

import { CategoriesList } from "./components/CategoriesList";

import "./App.css";

const App = () => {
  const [API_URL, SetAPI_URL] = useState(
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
    fetchLogoSrc().catch();
    fetchCategories().catch();
    fetchQuote().catch();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <img className="logo" src={logoSrc} alt="Chuck Norris" />
        <h1>Chuck Norris</h1>
      </header>
      <CategoriesList categories={categories} />
    </div>
  );
};

export default App;
