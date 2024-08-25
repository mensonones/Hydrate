import useKeyboardVisibility from '../../hooks/useKeyboardVisibility';
import useWaterIntake from '../../hooks/useWaterIntake';
import OnboardingView from './OnboardingView';
import texts from '../../utils/texts';

const OnboardingContainer = () => {
  const keyboardVisible = useKeyboardVisibility();
  const {weight, waterIntake, onChangeText} = useWaterIntake();

  return (
    <OnboardingView
      keyboardVisible={keyboardVisible}
      weight={weight}
      waterIntake={waterIntake}
      onChangeText={onChangeText}
      texts={texts}
    />
  );
};

export default OnboardingContainer;
