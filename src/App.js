import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [categories] = useState([
    { name: "About Me", description: "A brief into on me" },
    { name: "Projects", description: "A list of past projects" },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div className="App">
      <Header></Header>
      <Navigation
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Navigation>
      <main>
        {!contactSelected && !resumeSelected ? (
          <>
            <AboutMe currentCategory={currentCategory}></AboutMe>
            <Project></Project>
          </>
        ) : (
          <>
            <Contact></Contact>
            <Resume></Resume>
          </>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
