import React from 'react'
import { Tabs } from 'expo-router'
import MyTabBar from '../../components/TabBar'
import TabBarHeader from 'components/TabBarHeader'

const TabLayout = () => {
  return (
    <Tabs
      sceneContainerStyle={{ backgroundColor: 'white' }}
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
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
