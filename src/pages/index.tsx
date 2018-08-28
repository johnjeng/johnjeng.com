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
          <h1>Simple methods for substantial results</h1>
        </header>

        <div className="flex ">

          <div>
            <span className="icon fa-comment-o"></span>
            <h3>Assess</h3>
            <p>Understand goals and life restrictions</p>
          </div>

          <div>
            <span className="icon fa-link"></span>
            <h3>Integrate</h3>
            <p>Add non-disruptive lifestyle changes</p>
          </div>

          <div>
            <span className="icon fa-line-chart"></span>
            <h3>Profit</h3>
            <p>Track your progress to reach your goals</p>
          </div>

        </div>

        <footer>
          <a href="#" className="button">Get Started</a>
        </footer>
      </div>
    </section>
  </div>
);
