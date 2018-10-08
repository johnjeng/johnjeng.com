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
    <Nav />

    <section id="banner">
      <div className="inner">
        <header>
          <h1>Get fit for life</h1>
        </header>

        <div className="flex ">
          <div>
            <span className="icon fa-comment-o" />
            <h3>Assess</h3>
            <p>Understand goals and hurdles</p>
          </div>

          <div>
            <span className="icon fa-link" />
            <h3>Integrate</h3>
            <p>Add sustainable lifestyle changes</p>
          </div>

          <div>
            <span className="icon fa-line-chart" />
            <h3>Iterate</h3>
            <p>Track progress, tweak, and improve</p>
          </div>
        </div>

        <footer>
          <a href="./getting-started/" className="button">
            Get Started Today
          </a>
        </footer>
      </div>
    </section>

    <section id="three" className="wrapper align-center">
      <div className="inner" style={{ maxWidth: "600px" }}>
        <article>
          <header>
            <h3>Stop Putting it Off</h3>
          </header>
          <p>
            You know you're supposed to be exercising or whatever. But there's
            no issues yet. You're doing fine. That cheeseburger won't kill you.
            Heart disease is for old people. You can eat whatever you want.
          </p>

          <p>
            But <strong>you know better</strong>. Quality training helps{" "}
            <strong>prevent all sorts of terrible things</strong>, like easily
            broken bones, loss of jar-opening-powers, stroke, heart attack, etc.
            they just haven't happened yet.
          </p>

          <p>
            Simply from an enjoyment perspective, <strong>start now</strong>.
            Not in 5 years, not in 20. Start now when you have time to explore
            and <strong>find the kind of training you enjoy</strong>.
          </p>

          <p>
            Maybe you tried doing cardio by running on a treadmill and wanted to
            kill yourself. Maybe you tried a rowing machine but threw out your
            back so you swore that off. Maybe you heard that free weights are
            dangerous or you'll bulk up too fast.
          </p>

          <p>
            <strong>Whatever your hurdle is</strong> to leveling up your body,
            we'll find a way around it.{" "}
            <strong>We'll find something sustainable</strong> and worthwhile to
            make sure you can keep eating that cheeseburger.
          </p>

          <footer>
            <a
              href="https://calendly.com/johnjeng/free-consultation/"
              target="_blank"
              className="button"
            >
              Chat over coffee
            </a>
          </footer>
        </article>
      </div>
    </section>
  </div>
);
