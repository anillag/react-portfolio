import React from "react";

function Project() {
  return (
    <div className="flex-row">
      <div className="title">
        <h1 id="projects">Projects</h1>
      </div>
      <div className="titletext">
        <a href="https://serene-plateau-06938.herokuapp.com/">
          <article class="project budget-tracker">
            <div>
              <h3>Budget Tracker</h3>
              <a href="https://github.com/anillag/Budget-Tracker">GitHub</a>
            </div>
          </article>
        </a>
        <a href="https://fowlerbo.github.io/businessPlanner/">
          <article class="project business-planner">
            <div>
              <h3>Business Planner</h3>
              <a href="https://github.com/fowlerbo/businessPlanner">GitHub</a>
            </div>
          </article>
        </a>
        <a href="https://lit-wildwood-84509.herokuapp.com/">
          <article class="project tech-blog">
            <div>
              <h3>Tech Blog</h3>
              <a href="https://github.com/anillag/Tech-Blog">GitHub</a>
            </div>
          </article>
        </a>
        <a href="https://serene-citadel-89543.herokuapp.com/">
          <article class="project three-joes">
            <div>
              <h3>Three Joe's</h3>
              <a href="https://github.com/courtcoder/Three-Joes">GitHub</a>
            </div>
          </article>
        </a>
        <a href="https://anillag.github.io/Challenge-6-Weather-Dashboard/">
          <article class="project weather-dashboard">
            <div>
              <h3>Weather Dashboard</h3>
              <a href="https://github.com/anillag/Challenge-6-Weather-Dashboard">
                GitHub
              </a>
            </div>
          </article>
        </a>
        <a href="https://anillag.github.io/Challenge-5-Work-Day-Scheduler/">
          <article class="project work-day-scheduler">
            <div>
              <h3>Work Day Scheduler</h3>
              <a href="https://github.com/anillag/Challenge-5-Work-Day-Scheduler">
                GitHub
              </a>
            </div>
          </article>
        </a>
      </div>
    </div>
  );
}

export default Project;
