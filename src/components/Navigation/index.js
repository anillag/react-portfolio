import React from "react";

function Navigation(props) {
  const {
    categories = [],
    currentCategory,
    setCurrentCategory,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  return (
    <header>
      <div className="flex-row">
        <div className="title">
          <h2>
            <a href="/">Joe Gallina's Portfolio</a>
          </h2>
        </div>
        <div className="titletext">
          <nav>
            <ul>
              {categories.map((category) => (
                <li
                  className={`${
                    currentCategory.name === category.name &&
                    !contactSelected &&
                    !resumeSelected &&
                    "active"
                  }`}
                  key={category.name}
                >
                  <span
                    onClick={() => {
                      setCurrentCategory(category);
                      setContactSelected(false);
                      setResumeSelected(false);
                    }}
                  >
                    {category.name}
                  </span>
                </li>
              ))}
              <li className={`${contactSelected && "active"}`}>
                <span
                  onClick={() => {
                    setContactSelected(true);
                    setResumeSelected(false);
                  }}
                >
                  Contact
                </span>
              </li>
              <li className={`${resumeSelected && "active"}`}>
                <span
                  onClick={() => {
                    setContactSelected(false);
                    setResumeSelected(true);
                  }}
                >
                  Resume
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
