import PropTypes from 'prop-types';
import { BtnList, BtnItem } from "./FeedbackOptions.styled";


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <BtnList>
        {options.map(option => {
            return (
            <li key={option}>
                <BtnItem onClick={() => {onLeaveFeedback(option)}} >
                    {option}
                </BtnItem>
            </li>
        )})}
    </BtnList>
}

FeedbackOptions.protoType = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}