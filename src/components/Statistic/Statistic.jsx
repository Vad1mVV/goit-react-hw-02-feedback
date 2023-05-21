import PropTypes from 'prop-types';
import { Notification } from '../Notification';

export const Statistic = ({good, neutral, bad, total, positivePercentage}) => {
    return <div>
        {total === 0 ? (
        <Notification message='There is no feedback' />
        ) : (
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedbak: {positivePercentage}%</li>
        </ul>
        )}
    </div>
}

Statistic.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}