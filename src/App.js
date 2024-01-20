import "./App.css";
import Footer from "./components/Footer";
import ToastContainer from "./components/ToastContainer";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:city" element={<Landing />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <ToastContainer/>
      <Footer/>
    </div>
  );
}

export default App;
