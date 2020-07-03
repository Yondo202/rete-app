import React from 'react';
import './Style/Style.css';
import Home from "./containers/Home"
import Header from './containers/Header';
import Footer from './containers/Footer'


function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
