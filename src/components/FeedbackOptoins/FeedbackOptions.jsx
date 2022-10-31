import PropTypes from 'prop-types';
import {
  List,
  Item,
  Button,
} from 'components/FeedbackOptoins/FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List>
    {options.map(option => (
      <Item key={option}>
        <Button type="button" value={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      </Item>
    ))}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
