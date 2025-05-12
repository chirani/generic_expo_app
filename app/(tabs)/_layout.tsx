import React from 'react'
import { Tabs } from 'expo-router'
import MyTabBar from '../../components/TabBar'
import TabBarHeader from 'components/TabBarHeader'
import { colors } from 'config/Theme'

const TabLayout = () => {
  return (
    <Tabs
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        sceneStyle: { backgroundColor: colors.background },
        header: (props) => <TabBarHeader {...props} />,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="MyProfile" />
      <Tabs.Screen name="Search" />
      <Tabs.Screen name="Inbox" />
    </Tabs>
  )
}

export default TabLayout
