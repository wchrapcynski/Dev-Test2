import React from 'react';
import './App.scss';
import Header from "./components/header/header"
import Hero from "./components/hero/hero"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
