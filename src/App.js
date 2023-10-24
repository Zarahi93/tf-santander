import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import { createTheme, ThemeProvider, getContrastRatio } from '@mui/material/styles';

const redSantanderBase = '#ec0000';
const bgColorBase = '#f2f2f2';
const txtBase = '#000';
const txtSecondaryBase = '#787878';

const santanderTheme = createTheme({
    palette: {
        redSantander: {
            main: redSantanderBase,
            contrastText: getContrastRatio(redSantanderBase, '#fff') > 4.5 ? '#fff' : '#000',
        },
        bgColor: {
            main: bgColorBase,
            contrastText: getContrastRatio(bgColorBase, '#fff') > 4.5 ? '#fff' : '#000',
            },
        txtPrincipal: {
            main: txtBase,
        },
        txtSecondary: {
            main: txtSecondaryBase,
        },
    },
    typography: {
      h0: {
          fontFamily: "Santander Headline W05 Bold"
        },
      h1: {
          fontFamily: "Santander Headline W05 Bold"
      },
      h2: {
          fontSize: 28,
          fontFamily: "Santander Text W05 Regular"
      },
      button: {
        fontFamily: "Santander Headline W05 Bold",
        textTransform: 'none',
      },
    },
  });

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
