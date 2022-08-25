import PropTypes from 'prop-types';
import { StatisticsWrapper } from "./Section.styled";

export const Section = ({title, children}) => {
    return <StatisticsWrapper>
        <h2>{title}</h2>
        {children}
    </StatisticsWrapper>
}

Section.protoType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}