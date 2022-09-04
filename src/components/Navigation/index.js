import React from "react";

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  return (
    <header>
      <h2>
        <a href="/">Joe Gallina!</a>
      </h2>
      <nav>
        <ul>
          <li className={`${contactSelected && "active"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`${
                currentCategory.name === category.name &&
                !contactSelected &&
                "active"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
