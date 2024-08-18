import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import styles from './styles';

const TabBarLabel = ({ children, style, ...props }) => {
  const { colors } = useTheme();

  return (
    <Text style={[styles.text, { color: colors.text }, style]} {...props}>
      {children}
    </Text>
  );
};

export default TabBarLabel;
