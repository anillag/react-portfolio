import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [categories] = useState([
    { name: "About Me", description: "A brief into on me" },
    { name: "Projects", description: "A list of past projects" },
    { name: "Resume", description: "Joe Gallina's resume" },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Header></Header>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      <main>
        {!contactSelected ? (
          <>
            <AboutMe currentCategory={currentCategory}></AboutMe>
            <Project></Project>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
