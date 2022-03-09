import PropTypes from "prop-types";
import { AppBar, Typography, styled, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Theme from "../Theme/Theme";

const HeaderBlock = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
  width: 100%;
  background-color: ${Theme.palette.primary.main};
`;
const HeaderContent = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media (min-width: 1024px) {
    padding: 0 184px;
  }
`;
const HeaderLogo = styled(Box)`
  width: 43px;
  height: 43px;
`;
const HeaderHeading = styled(Typography)`
  padding: 0 10px;
  font-size: 16px;
  font-weight: 800;
`;

const Header = ({ logoSrc }) => (
  <HeaderBlock component="header">
    <HeaderContent>
      <HeaderLogo component="img" alt="Chuck Norris logo" src={logoSrc} />
      <HeaderHeading variant="h1">Chuck Norris</HeaderHeading>
    </HeaderContent>
  </HeaderBlock>
);

Header.propTypes = {
  logoSrc: PropTypes.string.isRequired,
};

export default Header;
