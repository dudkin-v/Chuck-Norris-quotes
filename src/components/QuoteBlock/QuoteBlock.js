import PropTypes from "prop-types";
import { Typography, Container, Box, styled } from "@mui/material";
import Theme from "../Theme/Theme";

const QuoteContainer = styled(Container)`
  position: relative;
  display: flex;
  @media(min-width: 1024px){
    padding: 165px 160px 60px;
  }
  @media(max-width: 1024px){
    padding: 140px 0 60px;
  }
  @media(max-width: 600px){
    padding: 100px 0 60px;
  }
`;
const QuoteBox = styled(Box)`
  width: 100%;
  min-height: 110px;
  padding: 24px;
  border-radius: 25px;
  box-shadow: 0 100px 80px rgba(80, 76, 103, 0.07),
  0 0 10px rgba(80, 76, 103, 0.035);
  background-color: ${Theme.palette.primary.main};
  z-index: 2;
  @media (max-width: 600px) {
    padding: 16px;
    height: 170px;
    max-height: 170px;
    overflow-y: scroll;
  }
`;
const ChuckImage = styled(Box)`
  position: absolute;
  z-index: 1;
  right: 15%;
  top: -3%;
  width: 122px;
  height: 258px;
  @media (max-width: 1024px) {
    right: 15%;
    top: -10%;
  }
  @media (max-width: 600px) {
    right: 5%;
    top: -30%;
  }
`;

const QuoteBlock = ({ quote }) => (
  <QuoteContainer component="section">
    <QuoteBox>
      <Typography variant="body1">{quote}</Typography>
    </QuoteBox>
    <ChuckImage
        /* eslint-disable-next-line global-require */
        component="img" src={require("./chuck_norris.png")} alt="Chuck Norris"
     />
  </QuoteContainer>
);

QuoteBlock.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default QuoteBlock;
