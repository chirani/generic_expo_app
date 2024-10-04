import React from 'react'
import { Stack } from 'expo-router'
import { Platform, StatusBar, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const RootLayout = () => {
  const insets = useSafeAreaInsets()
  const hasDynamicIsland = Platform.OS === 'ios' && insets.top > 50
  const statusBarHeight = hasDynamicIsland ? insets.top - 5 : insets.top

  return (
    <>
      <>
        <StatusBar animated={false} hidden={false} backgroundColor="red" />
        <View style={{ height: statusBarHeight }}></View>
      </>
      <Stack
        initialRouteName="(tabs)"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'white' },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="Ping" />
        <Stack.Screen name="Bids" />
        <Stack.Screen name="Purchased" />
        <Stack.Screen name="Saved" />
        <Stack.Screen name="WatchList" />
        <Stack.Screen name="ProductPage" />
      </Stack>
      <View style={{ height: insets.bottom }}></View>
    </>
  )
}

export default RootLayout
