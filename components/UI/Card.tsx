import { View } from 'react-native';
import React, { ReactNode } from 'react';
import { spacing, colors } from './Colors';

interface CardProps {
  children: ReactNode;
}
const Card = ({ children }: CardProps) => {
  return (
    <View
      style={{
        padding: spacing.lg,
        borderWidth: 2,
        borderColor: colors.text,
        borderRadius: spacing.lg,
      }}>
      {children}
    </View>
  );
};

export default Card;
