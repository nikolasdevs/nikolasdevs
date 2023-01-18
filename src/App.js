import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Header,
  WhatNikolasDevs,
  Features,
} from "./containers";

import { CTA, Navbar, Brand } from "./components";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient--bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatNikolasDevs />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
