import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import MainNavigation from './src/navigation/Main';

// themes
import {paperLightTheme, paperDarkTheme} from './src/themes/papertheme';
import {
  navigationLightTheme,
  navigationDarkTheme,
} from './src/themes/navigationtheme';

// Splash screen
import BootSplash from 'react-native-bootsplash';

const App = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  React.useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <PaperProvider theme={isDarkTheme ? paperDarkTheme : paperLightTheme}>
      <NavigationContainer
        theme={isDarkTheme ? navigationDarkTheme : navigationLightTheme}>
        <MainNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
