import React from "react";
import styled from "styled-components";

const Tile = styled.div`
  text-align: center;
  border: 1px grey solid;
  border-radius: 5px;
`;

const ItemTitle = styled.h4`
  margin-top: 1rem;
`;

export default function PricingPage() {
  return (
    <div>
      <h3>Pricing</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "20rem",
          gridGap: "10px"
        }}
      >
        <Tile>
          <ItemTitle>Checkpoint</ItemTitle>
        </Tile>

        <Tile>
          <ItemTitle>Learn Something</ItemTitle>
        </Tile>

        <Tile>
          <ItemTitle>Transformation</ItemTitle>
        </Tile>
      </div>
    </div>
  );
}
