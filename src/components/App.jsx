import React, { Component } from "react";
import { Title } from "./Title";
import { Feedback } from "./Feedback";
import { Statistic } from "./Statistic";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  

  addGoodFeedback = (e) => {
    this.setState({
      good: this.state.good + 1
    })
  }

  addNeutralFeedback = (e) => {
    this.setState({
      neutral: this.state.neutral + 1
    })
  }

  addBadFeedback = (e) => {
    this.setState({
      bad: this.state.bad + 1
    })
  }

  render() {
    return (
      <>
        <Title title='Please leave feedback' />
        <Feedback addGoodFeedback={this.addGoodFeedback} addNeutralFeedback={this.addNeutralFeedback} addBadFeedback={this.addBadFeedback} />
        <Title title='Statistic' />
        <Statistic good={this.state.good}  neutral={this.state.neutral}  bad={this.state.bad}/>
      </>
    );
  }
}
