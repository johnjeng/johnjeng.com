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
          <a href="./getting-started/" className="button">Get Started</a>
        </footer>
      </div>
    </section>
{/*
    <section id="three" className="wrapper align-center">
      <div className="inner">
        <div className="flex flex-2">
          <article>
            <div className="image round">
              <img src="images/pic01.jpg" alt="Pic 01" />
            </div>
            <header>
              <h3>Lorem ipsum<br /> dolor amet nullam</h3>
            </header>
            <p>Morbi in sem quis dui placerat ornare. Pellentesquenisi<br />euismod in, pharetra a, ultricies in diam sed arcu. Cras<br />consequat  egestas augue vulputate.</p>
            <footer>
              <a href="#" className="button">Learn More</a>
            </footer>
          </article>
          <article>
            <div className="image round">
              <img src="images/pic02.jpg" alt="Pic 02" />
            </div>
            <header>
              <h3>Sed feugiat<br /> tempus adipicsing</h3>
            </header>
            <p>Pellentesque fermentum dolor. Aliquam quam lectus<br />facilisis auctor, ultrices ut, elementum vulputate, nunc<br /> blandit ellenste egestagus commodo.</p>
            <footer>
              <a href="#" className="button">Learn More</a>
            </footer>
          </article>
        </div>
      </div>
    </section>
*/}
  </div>
);
