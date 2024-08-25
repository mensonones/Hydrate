// hooks/useWaterIntake.test.js
import {renderHook, act} from '@testing-library/react-hooks';
import useWaterIntake from './useWaterIntake';

describe('useWaterIntake', () => {
  it('should calculate water intake correctly', () => {
    const {result} = renderHook(() => useWaterIntake());

    act(() => {
      result.current.onChangeText('70');
    });

    expect(result.current.waterIntake).toBeCloseTo(2.45); // 70 * 0.035 = 2.45

    act(() => {
      result.current.onChangeText('80,5');
    });

    expect(result.current.waterIntake).toBeCloseTo(2.8175); // 80.5 * 0.035 = 2.8175
  });

  it('should handle invalid input gracefully', () => {
    const {result} = renderHook(() => useWaterIntake());

    act(() => {
      result.current.onChangeText('abc');
    });

    expect(result.current.weight).toBe('');
    expect(result.current.waterIntake).toBe(0);
  });

  it('should display weight with comma', () => {
    const {result} = renderHook(() => useWaterIntake());

    act(() => {
      result.current.onChangeText('80.5');
    });

    expect(result.current.weight).toBe('80,5');
  });
});
