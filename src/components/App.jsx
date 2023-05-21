import React, { Component } from "react";
import { Title } from "./Title";
import { Feedback } from "./Feedback";
import { Statistic } from "./Statistic";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  

  addGoodFeedback = () => {
    this.setState({
      good: this.state.good + 1,
      total: this.state.total + 1
    })
  }

  addNeutralFeedback = () => {
    this.setState({
      neutral: this.state.neutral + 1,
      total: this.state.total + 1
    })
  }

  addBadFeedback = () => {
    this.setState({
      bad: this.state.bad + 1,
      total: this.state.total + 1
    })
  }

  countPositiveFeedbackPercentage = ({good, total}) => {
    if(total === 0) {
      return 0
    }
    const percent = (good / total) * 100
    return Math.round(percent);
  }

  render() {
    return (
      <>
        <Title title='Please leave feedback' />
        <Feedback 
          addGoodFeedback={this.addGoodFeedback} 
          addNeutralFeedback={this.addNeutralFeedback} 
          addBadFeedback={this.addBadFeedback}
        />
        <Title title='Statistic' />
        <Statistic 
          good={this.state.good}  
          neutral={this.state.neutral}  
          bad={this.state.bad} 
          total={this.state.total} 
          positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
        />
      </>
    );
  }
}
