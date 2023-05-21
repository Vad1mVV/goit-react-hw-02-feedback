import React, { Component } from "react";
import { Title } from "./Title";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Title title='Please leave feedback' />
        <Title title='Statistic' />
      </>
    );
  }
}
