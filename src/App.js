import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './layout/Header';
import NewspaperFooter from './component/Footer';
import NewspaperSection from './component/Home';
import UrduNewspaper from './HeroSection/Herosection';

// City Pages
import Lahore from './component/Lahore';
import Karachi from './component/Karachi';
import Islamabad from './component/Islamabad';
// Add other city components here if needed

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow-1">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  {/* <UrduNewspaper /> */}
                  <NewspaperSection />
                </>
              }
            />

            {/* City Pages */}
            <Route path="/lahore" element={ <UrduNewspaper />} />
            <Route path="/gujrawala" element={ <UrduNewspaper />} />
            <Route path="/sukkur" element={ <UrduNewspaper />} /> 
            <Route path="/rahimyar" element={ <UrduNewspaper />} />
            <Route path="/Sindhi" element={ <UrduNewspaper />} />
            <Route path="/karachi" element={ <UrduNewspaper />} />
            <Route path="/islamabad" element={ <UrduNewspaper />} />
            <Route path="/multan" element={ <UrduNewspaper />} />
            <Route path="/sargodha" element={ <UrduNewspaper />} />
            <Route path="/faisalabad" element={ <UrduNewspaper />} />
            <Route path="/peshawar" element={ <UrduNewspaper />} />
            <Route path="/quetta" element={ <UrduNewspaper />} />
          </Routes>
        </main>

        {/* Footer */}
        <NewspaperFooter />
      </div>
    </Router>
  );
}

export default App;
