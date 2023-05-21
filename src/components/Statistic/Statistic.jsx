import PropTypes from 'prop-types';

export const Statistic = ({good, neutral, bad}) => {
    return <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
    </ul>
}

Statistic.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
}