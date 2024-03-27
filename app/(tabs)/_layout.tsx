import React from "react";
import { Tabs } from "expo-router";
import MyTabBar from "../../components/TabBar";

const TabLayout = () => {
  return (
    <Tabs tabBar={(props) => <MyTabBar {...props} />}>
      <Tabs.Screen name="Main" />
      <Tabs.Screen name="MyProfile" />
      <Tabs.Screen name="Search" />
      <Tabs.Screen name="InBox" />
    </Tabs>
  );
};

export default TabLayout;
