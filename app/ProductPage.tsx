import { View, Dimensions } from 'react-native'
import React from 'react'
import { Text } from '@UI'
import { spacing } from 'config/Theme'
import { faker } from '@faker-js/faker'

const ProductPage = () => {
  const windowWidth = Dimensions.get('window').width

  return (
    <View>
      <View
        style={{
          height: windowWidth,
          width: windowWidth,
          backgroundColor: 'purple',
        }}
      ></View>
      <Text size="h2" style={{ margin: spacing.lg }}>
        {faker.lorem.words({ min: 4, max: 10 })}
      </Text>
    </View>
  )
}

export default ProductPage
