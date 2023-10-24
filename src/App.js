import logo from './logo.svg';
import './App.css';
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
// <ThemeProvider theme={santanderTheme}> 
// VA DENTRO DE LA FUNCIÓN Y ENCAPSULA TODOS LOS ELEMENTOS
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  // <ThemeProvider />
}

export default App;
