import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './pages/NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div id='page-body'>
    <NavBar/>

        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} exact />
          <Route path="/articles-list" element={<ArticlesListPage />} exact />
          <Route path="/article/:name" element={<ArticlePage />} exact />
          <Route element={<NotFoundPage />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
