import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
function App() {
  return (
    <>
      <div>
        <AuthContextProvider>
        <Router>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details" element={<Details/>} />
          </Routes>
        </Router>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
