import * as React from "react";
import styled from "styled-components";
import { Nav } from "../templates/nav-bar";

import {ContactForm} from "../components/ContactForm"

const SignUp = styled.button``;

const EmailSignUp = () => {
  return (
    <div className="ui action input">
      <input type="text" placeholder="Email" />
      <button className="ui button" role="button">
        Sign Up
      </button>
    </div>
  );
};

const Article = styled.div`
  margin: auto;
  width: 80%;
`

export default function PricingPage() {
  return (
    <Article className="subpage">
      <Nav/>
      <h3>Adaptive In Person Training</h3>
      Don't settle for fitting into someone's template. Get training programs
      curated for your goals and needs without doing uneccessary work.
      <br />
      <br />
      <br />
      <SignUp>Chat about lifestyle integration</SignUp>
      <br />
      Starting at $80/hr
    </Article>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20rem;
  grid-gap: 10px;
`;

const Tile = styled.div`
  text-align: center;
  border: 1px grey solid;
  border-radius: 5px;
`;

const ItemTitle = styled.h4`
  margin-top: 1rem;
`;

export function FuturePricingPage() {
  return (
    <div>
      <h3>Pricing</h3>
      <Grid>
        <Tile>
          <ItemTitle>In Person</ItemTitle>
          Train 1 on 1 with John - Form corrections
        </Tile>

        <Tile>
          <ItemTitle>Hybrid</ItemTitle>
        </Tile>

        <Tile>
          <ItemTitle>Online</ItemTitle>
        </Tile>
      </Grid>
      For questions contact me at john.jeng5@gmail.com.
    </div>
  );
}
