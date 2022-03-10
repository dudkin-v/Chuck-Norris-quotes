import { createTheme } from "@mui/material";

const lightTheme = createTheme({
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

const darkTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#1c1c39",
          backgroundColor: "#fff",
          ":hover": {
            color: "#fff",
            backgroundColor: "#3e9cb8",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Raleway",
    h1: {
      color: "#1c1c39",
    },
    h2: {
      color: "#fff",
    },
    body1: {
      color: "#1c1c39",
      fontSize: "20px",
    }
  },
  palette: {
    background: {
      default: "#1c1c39",
    },
    primary: {
      main: "#e5e5e5",
    },
    secondary: {
      main: "#1c1c39"
    }
  },
});

const Themes = {
  lightTheme: {
    name: "light",
    theme: lightTheme,
  },
  darkTheme: {
    name: "dark",
    theme: darkTheme,
  },
};

export default Themes;
