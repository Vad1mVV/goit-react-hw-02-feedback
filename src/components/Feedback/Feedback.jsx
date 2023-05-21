import PropTypes from 'prop-types';

export const Feedback = ({addGoodFeedback, addNeutralFeedback, addBadFeedback}) => {
    return <>
        <button type='button' onClick={addGoodFeedback} >Good</button>
        <button type='button' onClick={addNeutralFeedback} >Neutral</button>
        <button type='button' onClick={addBadFeedback} >Bad</button>
    </>
}

Feedback.propTypes = {
    addGoodFeedback: PropTypes.func,
    addNeutralFeedback: PropTypes.func,
    addBadFeedback: PropTypes.func,
}