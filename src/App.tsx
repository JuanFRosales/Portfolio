import React from "react";
import Welcome from "./components/Welcome.tsx";
import MainInfo from "./components/MainInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Welcome />
      <MainInfo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
