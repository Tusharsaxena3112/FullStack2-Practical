import React, { Component } from "react";
import "../ui.css";

export default class UI extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
      value: "Click on the button to show more",
      btnText: "Read More",
    };
  }
  check = () => {
    if (this.state.toggle) {
      this.setState({
        value:
          "Divyanshi is a bad girl. She is very naughty.She likes to sleep.She eats a lot.She is a big foodie.She becomes very angry when someone try to awake her from her sleep.She will become a panda very soon.Her nickname is 🤐",
        toggle: false,
        btnText: "Read Less",
      });
    } else {
      this.setState({
        value: "Click on the button to show more",
        toggle: true,
        btnText: "Show More",
      });
    }
  };
  render() {
    return (
      <>
        <h1>Ques-2</h1>
        <hr />
        <h2>Welcome to BetaLabs..!</h2>
        <p>{this.state.value}</p>
        <button onClick={this.check}>{this.state.btnText}</button>
      </>
    );
  }
}
