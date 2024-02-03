import PropTypes from "prop-types";

 
function QuotesItem({phrase, character}) {

    return (
        <p className='phrases_phrase'>{phrase} - {character}</p>
    );
}

QuotesItem.propTypes = {
    phrase: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
}

export default QuotesItem;