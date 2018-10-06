import * as React from "react";

import Link from "gatsby-link";
import { Nav } from "../templates/nav-bar";

export const AmazonLink = () => {
  return (
    <a
      target="_blank"
      href="https://www.amazon.com/?&_encoding=UTF8&tag=johnjeng-20&linkCode=ur2&linkId=2f956fa00a2a4dbb46dd162d2e5b3baf&camp=1789&creative=9325"
    >
      Amazon
    </a>
  );
};

export default () => (
  <div>
    <Nav/>

    <section id="banner">
      <div className="inner">
        <header>
          <h1>Get fit for life</h1>
        </header>

        <div className="flex ">

          <div>
            <span className="icon fa-comment-o"></span>
            <h3>Assess</h3>
            <p>Understand goals and hurdles</p>
          </div>

          <div>
            <span className="icon fa-link"></span>
            <h3>Integrate</h3>
            <p>Add sustainable lifestyle changes</p>
          </div>

          <div>
            <span className="icon fa-line-chart"></span>
            <h3>Iterate</h3>
            <p>Track progress, tweak, and improve</p>
          </div>

        </div>

        <footer>
          <a href="./getting-started/" className="button">Get Started Today</a>
        </footer>
      </div>
    </section>


    <section id="three" className="wrapper align-center">
      <div className="inner">
        <div className="flex flex-2">
          <article>
            <header>
              <h3>You've got a lot on your plate. <br/> Don't let fitness be another headache.</h3>
            </header>
              I'll filter down the endless possibilities for you. Dumbells or barbells? 
              Bands or Cables? How much cardio? Is this enough?

            <footer>
              <a href="#" className="button">Learn More</a>
            </footer>
          </article>
          <article>
            <header>
              <h3>Invest in your future self.</h3>
            </header>
              
            <footer>
              <a href="#" className="button">Learn More</a>
            </footer>
          </article>
        </div>
      </div>
    </section>

  </div>
);
