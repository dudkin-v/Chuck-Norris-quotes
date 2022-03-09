import { createTheme } from "@mui/material";

const Theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#1c1c39",
          backgroundColor: "#fff",
          ":hover": {
            color: "#fff",
            backgroundColor: "#422ed4",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Raleway",
    h1: {
      color: "#fff",
    },
    h2: {
      color: "#1c1c39",
    },
    body1: {
      color: "#fff",
      fontSize: "20px",
    }
  },
  palette: {
    background: {
      default: "#e5e5e5",
    },
    primary: {
      main: "#422ed4"
    }
  },
});

export default Theme;
