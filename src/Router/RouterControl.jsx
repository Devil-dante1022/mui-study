import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../pages/Home/Homepage';
import Main from "../pages/Main/Main";
import Header from "../components/Header/Header";
import { createTheme, ThemeProvider} from '@mui/material/styles';
const theme = createTheme({
  palette:{
    primary:{
      main:'rgba(0, 255, 206, 1)',
    },
    secondary:{
      main:'rgba(255, 255, 255, 0.5)',
    }
  }
});
const RouterControl = () => {
  return(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path="_Main" element={<Main />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}
export default RouterControl;