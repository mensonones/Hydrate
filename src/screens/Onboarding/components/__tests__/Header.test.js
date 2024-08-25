import {render} from '@testing-library/react-native';
import Header from '../Header';

describe('Header Component', () => {
  const styles = {
    secondaryContainer: {flex: 1},
    logo: {width: 100, height: 100},
    tertiaryContainer: {padding: 10},
    appName: {fontSize: 20},
    welcome: {fontSize: 16},
  };

  const appName = 'Hydrate';
  const welcome = 'Welcome to Hydrate';

  it('should render the logo, app name, and welcome message', () => {
    const {getByText, getByTestId} = render(
      <Header styles={styles} appName={appName} welcome={welcome} />,
    );

    expect(getByTestId('logo')).toBeTruthy();
    expect(getByText(appName)).toBeTruthy();
    expect(getByText(welcome)).toBeTruthy();
  });
});
