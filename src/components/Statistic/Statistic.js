import  css  from './Statistic.module.css';
import PropTypes from 'prop-types';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}) => {
  return (
    <div className={css.statistic} >
      <span> Good : {good}</span>
      <span> Neutral : {neutral}</span>
      <span> Bad : {bad}</span>
      <span> Total : {total}</span>
      <span> Positive feedback : {positivePercentage} %</span>
    </div>
  );
};

Statistic.propTypes = {
  good:PropTypes.number.isRequired,
  neutral:PropTypes.number.isRequired,
  bad:PropTypes.number.isRequired,
  total:PropTypes.number,
  positivePercentage:PropTypes.number
 };