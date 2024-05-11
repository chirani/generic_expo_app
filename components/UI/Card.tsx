import { View, ViewProps } from 'react-native'
import React from 'react'
import { spacing, colors } from '../../config/Theme'

interface CardProps extends ViewProps {}
const Card = (props: CardProps) => {
  return (
    <View
      {...props}
      style={[
        {
          padding: spacing.lg,
          borderWidth: 2,
          borderColor: colors.text,
          borderRadius: spacing.lg,
        },
        props.style,
      ]}
    >
      {props.children}
    </View>
  )
}

export default Card
