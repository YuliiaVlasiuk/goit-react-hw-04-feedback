import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';
import { useState } from 'react';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOption/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttons = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(good + 1);
      return;
    } else {
      if (option === 'neutral') {
        setNeutral(neutral + 1);
        return;
      }
    }
    setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttons}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Statictics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}

      <GlobalStyle />
    </div>
  );
};
