import { renderHook, act } from '@testing-library/react-hooks';
import { Keyboard } from 'react-native';
import useKeyboardVisibility from './useKeyboardVisibility';

describe('useKeyboardVisibility', () => {
  beforeEach(() => {
    jest.spyOn(Keyboard, 'addListener').mockImplementation((event, callback) => {
      if (event === 'keyboardDidShow') {
        callback();
      }
      if (event === 'keyboardDidHide') {
        callback();
      }
      return {
        remove: jest.fn(),
      };
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return false when keyboard is not visible', () => {
    const { result } = renderHook(() => useKeyboardVisibility());

    expect(result.current).toBe(false);
  });

  it('should return true when keyboard is visible', () => {
    const { result } = renderHook(() => useKeyboardVisibility());

    act(() => {
      Keyboard.addListener.mock.calls[0][1](); // Simula o evento 'keyboardDidShow'
    });

    expect(result.current).toBe(true);
  });

  it('should return false when keyboard is hidden', () => {
    const { result } = renderHook(() => useKeyboardVisibility());

    act(() => {
      Keyboard.addListener.mock.calls[0][1](); // Simula o evento 'keyboardDidShow'
      Keyboard.addListener.mock.calls[1][1](); // Simula o evento 'keyboardDidHide'
    });

    expect(result.current).toBe(false);
  });
});