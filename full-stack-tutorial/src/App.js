import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Routes> 
          <Route path='/checkout'
            element={<><Header/><h1>I AM A CHECKOUT PAGE</h1></>}>
          </Route>
          <Route path='/' 
            element={<><Header/><Home/></>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
