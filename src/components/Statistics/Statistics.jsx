import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { Box, Option } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total === 0 ? (
    <Notification message="No feedback given" />
  ) : (
    <Box>
      <Option>Good: {good}</Option>
      <Option>Neutral: {neutral}</Option>
      <Option>Bad: {bad}</Option>
      <Option>Total: {total}</Option>
      <Option>Positive feedback: {positivePercentage}%</Option>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
