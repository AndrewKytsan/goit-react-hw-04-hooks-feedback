import s from './Statistics.module.scss';
import PropTypes from 'prop-types';

export default function Statistics({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) {
    return (
        <div>
            <h2 className={s.statTitle}>Statistics</h2>
            {total ? (
                <div className={s.stats}>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive feedbacks: {positivePercentage}%</p>
                </div>
            ) : (
                <p>No feedback given</p>
            )}
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
