import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    
    <button
      className={css.button}
      type="button"
      key={nanoid()}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>


  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
