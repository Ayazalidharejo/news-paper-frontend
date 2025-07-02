import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewspaperSection from './component/Home';
import UrduNewspaper from './HeroSection/Herosection';
import Header from './layout/Header';

// Optional: Create dummy pages for city routes
import Lahore from '../src/component/Lahore';
import Karachi from '../src/component/Karachi';
// ... add more city components similarly

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <UrduNewspaper />
                <NewspaperSection />
              </>
            }
          />

          {/* City Pages */}
          <Route path="/lahore" element={<Lahore />} />
          <Route path="/karachi" element={<Karachi />} />
          {/* Add other cities similarly */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
