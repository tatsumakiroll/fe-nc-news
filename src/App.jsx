import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import ArticlesList from './components/ArticlesList'
import Article from './components/Article'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Nav/>
    <Routes>
    <Route path="/" element={<ArticlesList/>}/>
    <Route path="/articles" element={<ArticlesList/>}/>
    <Route path="/articles/:article_id" element={<Article/>}/>
    </Routes>
    </>
  )
}

export default App
