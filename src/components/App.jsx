import React, { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = name => {
    this.setState(prevState => {
      return {[name]: prevState[name] + 1};
    });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { totalFeedback } = this;
    return Math.round(this.state.good * 100 / totalFeedback())
  }

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    const { handleClick, totalFeedback, countPositiveFeedbackPercentage} = this;
    return (
      <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={handleClick}/>
      </Section>
      <Section title="Statistics">
      {totalFeedback() ? 
      <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad} 
      total={totalFeedback} 
      positivePercentage={countPositiveFeedbackPercentage}/> :<Notification/>}
      </Section>
      </div>
    );
  }
}
