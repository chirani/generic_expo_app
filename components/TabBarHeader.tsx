//(property) header?: ((props: BottomTabHeaderProps) => React.ReactNode)
import { Image } from 'react-native'
import React from 'react'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import Container from '@UI/Container'
import { spacing } from 'config/Theme'
import HeaderIcon from './HeaderIcon'

const TabBarHeader = (props: BottomTabHeaderProps) => {
  return (
    <>
      <Container style={{ padding: spacing.lg }} alignItems="center" flexDirection="row">
        <Container
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          flex={1}
        >
          <Image
            style={{
              width: 64,
              height: 32,
            }}
            resizeMode="contain"
            source={require('../assets/text_logo.png')}
          />
          <HeaderIcon fontName="cart-shopping" />
        </Container>
      </Container>
    </>
  )
}

export default TabBarHeader
