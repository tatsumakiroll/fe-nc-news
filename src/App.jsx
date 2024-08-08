import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserLoginContext } from "./context/UserLoginContext";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";
import "./App.css";
import { Container } from "@mui/material";

function App() {
  const [currentUser, setCurrentUser] = React.useState("jessjelly");

  return (
    <UserLoginContext.Provider value={{ currentUser, setCurrentUser }}>
      <Container sx={{bgcolor: 'white', height: "100vh", width:'95vw'}}>
      <Header/>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
      </Container>
    </UserLoginContext.Provider>
  );
}

export default App;
