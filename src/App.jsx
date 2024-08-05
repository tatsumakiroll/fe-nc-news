import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserLoginContext } from "./context/UserLoginContext";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = React.useState("jessjelly");

  return (
    <UserLoginContext.Provider value={{ currentUser, setCurrentUser }}>
      <Header/>
      <Nav />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </UserLoginContext.Provider>
  );
}

export default App;
