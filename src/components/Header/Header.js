import PropTypes from "prop-types";
import {AppBar, Typography, styled, Container, FormGroup, FormControlLabel, Switch} from "@mui/material";
import Box from "@mui/material/Box";

const HeaderBlock = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
  width: 100vw;
`;
const HeaderContent = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media (min-width: 1024px) {
    padding-left: 184px;
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
const HeaderForm = styled(FormGroup)`
  padding-right: 24px;
  @media (min-width: 1024px) {
    padding-right: 184px;
  }
`;

const Header = ({ logoSrc, onChangeTheme, theme }) => (
  <HeaderBlock component="header" sx={{backgroundColor: "primary.main"}}>
    <HeaderContent>
      <HeaderLogo component="img" alt="Chuck Norris logo" src={logoSrc} />
      <HeaderHeading variant="h1">Chuck Norris</HeaderHeading>
    </HeaderContent>
      <HeaderForm>
          <FormControlLabel control={<Switch onChange={onChangeTheme} color="secondary"/>} label={theme}/>
      </HeaderForm>
  </HeaderBlock>
);

Header.propTypes = {
  logoSrc: PropTypes.string.isRequired,
    onChangeTheme: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
};

export default Header;
