import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderBlock = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #422ed4;
  padding: 8px 10%;
`;

const Logo = styled.img`
  width: 43px;
  height: 43px;
`;

const Heading = styled.h1`
  font-size: 16px;
  font-weight: 800;
  line-height: 19px;
  color: #ffffff;
  padding: 0 10px;
`;

const Header = ({ logoSrc }) => (
  <HeaderBlock>
    <Logo src={logoSrc} alt="Chuck Norris" />
    <Heading>Chuck Norris</Heading>
  </HeaderBlock>
);

Header.propTypes = {
  logoSrc: PropTypes.string.isRequired,
};

export default Header;
