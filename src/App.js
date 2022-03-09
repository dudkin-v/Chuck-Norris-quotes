import { useState, useEffect, useCallback } from "react";
import { Container, ThemeProvider, styled } from "@mui/material";

import Theme from "./components/Theme/Theme";
import { Header } from "./components/Header";
import { CategoriesBlock } from "./components/CategoriesBlock";
import { QuoteBlock } from "./components/QuoteBlock";

const Wrapper = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  min-height: 100vh;
`;

const RANDOM_URL = "https://api.chucknorris.io/jokes/random";
const CATEGORY_URL = "https://api.chucknorris.io/jokes/random?category=";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [quote, setQuote] = useState("");
  const [logoSrc, setLogoSrc] = useState("");

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

  const handleClick = (category) => () => {
    fetchQuote(
      category === "random" ? RANDOM_URL : `${CATEGORY_URL}${category}`
    ).catch();
  };

  useEffect(() => {
    fetchLogoSrc().catch();
    fetchCategories().catch();
    fetchQuote(RANDOM_URL).catch();
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
      <Header logoSrc={logoSrc} />
      <CategoriesBlock categories={categories} handleClick={handleClick} />
      <QuoteBlock quote={quote} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
