import { useState, useEffect, useCallback } from 'react';

const useWaterIntake = () => {
  const [weight, setWeight] = useState('');
  const [waterIntake, setWaterIntake] = useState(0);

  const onChangeText = useCallback(text => {
    const sanitizedText = text.replace(',', '.');
    const num = parseFloat(sanitizedText);
    setWeight(isNaN(num) ? '' : sanitizedText);
  }, []);

  const calculateWaterIntake = (weightValue) => {
    const num = parseFloat(weightValue.replace(',', '.'));
    return isNaN(num) ? 0 : num * 0.035; // 35 ml por kg de peso corporal
  };

  useEffect(() => {
    setWaterIntake(calculateWaterIntake(weight));
  }, [weight]);

  return {
    weight: weight.replace('.', ','),
    waterIntake,
    onChangeText,
  };
};

export default useWaterIntake;
