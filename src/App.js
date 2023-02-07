import './App.css';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Chapter from './components/Chapter';
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './components/Details';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path='/details/:path'
            element={
              <>
                <Header />
                <Details />
                <Footer />
              </>
            }
          />
          <Route path='/:url/chapter/:chap' element={<Chapter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
