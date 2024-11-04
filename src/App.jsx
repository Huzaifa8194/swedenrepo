import "./App.css";
import Routing from "./routes/Routing";

import ThemeProvider from '../src/theme';
import './styles/buttons.css';
import './styles/styles.css';
import './styles/flaticon.css';
import './styles/themify-icons.css';
import './styles/animate.css';
import "./styles/animate.css";
import './i18n';


import SnackbarProvider from './components/snackbar/snackbar-provider';



import { SettingsDrawer, SettingsProvider } from './components/settings';

function App() {
  return (
    <>
    {/* <SettingsProvider
          defaultSettings={{
            themeMode: 'light', // 'light' | 'dark'
            themeDirection: 'ltr', //  'rtl' | 'ltr'
            themeContrast: 'default', // 'default' | 'bold'
            themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
            themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
            themeStretch: false,
          }}
        >
      <Routing />
      </SettingsProvider> */}



                  {/* <ProgressBar /> */}
                  <Routing />
              







      
    </>
  );
}

export default App;
