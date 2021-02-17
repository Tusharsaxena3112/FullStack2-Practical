import React from "react";

function FunctionalComponent() {
  const style = {
    border: "1px solid black",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "skyblue",
    color: "white",
    textAlign: "center",
    margin: "50px",
  };
  return (
    <div style={style}>
      <h1 style={{ fontSize: "40px", color: "brown" }}>
        This is the Functional Component.
      </h1>
      <p style={{ fontSize: "20px"}}>
        Created by :{" "}
        <span style={{ backgroundColor: "black", padding: "10px" }}>
          Tushar Saxena
        </span>
      </p>
    </div>
  );
}

export default FunctionalComponent;
