
/* eslint-disable no-undef */
jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn(),
  show: jest.fn(),
  getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
}));

jest.useFakeTimers();
