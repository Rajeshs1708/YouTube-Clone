import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">

        <Header />

        <div className="app__page">
          <Routes>
            <Route path='/' element={
              <>
                <Sidebar />
                <RecommendedVideos />
              </>
            } />
            <Route path='/search/:searchTerms' element={
              <>
                <Sidebar />
                <SearchPage />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
