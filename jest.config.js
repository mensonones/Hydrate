module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation|@react-native|@react-navigation/.*|@react-native-firebase/.*|@react-native-picker/.*|@react-native-picker/picker)',
  ],
  setupFiles: ['./jest.setup.js'],
};
