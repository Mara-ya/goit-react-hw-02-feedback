import PropTypes from 'prop-types';
import { StaristicsList } from "./Statistics.styled";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return <StaristicsList>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total()}</li>
        <li>Positive feedback: {positivePercentage()}%</li>
    </StaristicsList>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired, 
    total: PropTypes.func.isRequired, 
    positivePercentage: PropTypes.func.isRequired,
}