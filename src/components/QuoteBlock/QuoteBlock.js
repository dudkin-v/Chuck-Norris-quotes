import PropTypes from "prop-types";

import "./QuoteBlock.styles.css";

const QuoteBlock = ({ quote }) => (
  <div className="quote-block">
    <div className="quote">
      <p className="quote-text">{quote}</p>
    </div>
    {/* eslint-disable-next-line global-require */}
    <img className="chuck-img" src={require("./chuck_norris.png")} alt="Chuck Norris" />
  </div>
);

QuoteBlock.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default QuoteBlock;
