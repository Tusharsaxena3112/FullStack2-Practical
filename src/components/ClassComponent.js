import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    const style = {
      border: "1px solid black",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "lightyellow",
      color: "white",
      textAlign: "center",
      margin: "50px",
    };
    return (
      <div style={style}>
        <h1 style={{ fontSize: "40px", color: "brown" }}>
          This is the Class Component.
        </h1>
        <p style={{ fontSize: "20px", color: "black" }}>
          Created by :{" "}
          <span
            style={{
              backgroundColor: "black",
              padding: "10px",
              color: "white",
            }}
          >
            Tushar Saxena
          </span>
        </p>
      </div>
    );
  }
}

export default ClassComponent;
