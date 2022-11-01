import { useState, useEffect } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptoins/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Container } from 'components/App/App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positivFeedbackPercentage, setPositiveFeedbackPercentage] =
    useState(0);

  const handleIncrement = event => {
    const value = event.currentTarget.value;
    switch (value) {
      case 'good':
        return setGood(prevNum => prevNum + 1);

      case 'neutral':
        return setNeutral(prevNum => prevNum + 1);

      case 'bad':
        return setBad(prevNum => prevNum + 1);
      default:
        return;
    }
  };

  useEffect(() => {
    const total = good + neutral + bad;
    setTotalFeedback(total);

    setPositiveFeedbackPercentage(Math.floor((good * 100) / total));
  }, [good, neutral, bad]);

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivFeedbackPercentage}
        />
      </Section>
    </Container>
  );
};
