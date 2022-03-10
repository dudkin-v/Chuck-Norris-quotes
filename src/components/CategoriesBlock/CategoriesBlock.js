import PropTypes from "prop-types";
import {
  Typography,
  Container,
  List,
  styled,
  ListItem,
  Button,
} from "@mui/material";

const CategoriesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;
const CategoriesHeading = styled(Typography)`
  padding: 120px 0 50px;
  font-weight: 800;
  font-size: 50px;
  @media (max-width: 600px) {
    padding: 90px 0 20px;
    font-size: 36px;
  }
  @media (max-height: 500px) {
    padding: 90px 0 20px;
    font-size: 36px;
  }
`;
const CategoriesList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 425px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow-x: scroll;
    max-width: 100%;
  }
  @media (max-height: 500px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow-x: scroll;
    max-width: 100%;
  }
`;
const CategoriesListItem = styled(ListItem)`
  @media(min-width: 768px){
    width: 25%;
    max-width: 170px;
  }
  @media (max-width: 768px) {
    width: 25%;
  }
  @media (max-width: 600px) {
    padding: 8px;
  }
 @media (max-width: 425px) {
   width: 35vw;
   min-width: 35vw;
 }
`;
const CategoriesButton = styled(Button)`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 800;
  text-transform: lowercase;
  border-radius: 20px;
  padding: 12px 8px;
`;

const CategoriesBlock = ({ categories, handleClick }) => (
  <CategoriesContainer component="section">
    <CategoriesHeading variant="h2">Categories</CategoriesHeading>
    <CategoriesList>
      {categories.map((category) => (
        <CategoriesListItem key={category}>
          <CategoriesButton onClick={handleClick(category)}>
            {category}
          </CategoriesButton>
        </CategoriesListItem>
      ))}
    </CategoriesList>
  </CategoriesContainer>
);

CategoriesBlock.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CategoriesBlock;
