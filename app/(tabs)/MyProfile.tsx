import { ScrollView } from "react-native";
import { ListItem, Text } from "@UI";
import React from "react";
import { spacing } from "@UI/Theme";
import { router } from "expo-router";

const MyProfile = () => {
  return (
    <ScrollView contentContainerStyle={{ gap: spacing.md }}>
      <Text
        size="h3"
        style={{ marginBottom: spacing.lg, marginHorizontal: spacing.lg }}
      >
        My Profile
      </Text>
      <ListItem title="Messages" onPress={() => router.navigate("/Inbox")} />

      <ListItem
        title="Watchlist"
        onPress={() => router.navigate("../WatchList")}
      />

      <ListItem title="Saved" onPress={() => router.navigate("../Saved")} />

      <ListItem
        title="Purchased"
        onPress={() => router.navigate("../Purchased")}
      />

      <ListItem
        title="Bids & Offers"
        onPress={() => router.navigate("../Bids")}
      />

      <Text
        size="h3"
        style={{ marginBottom: spacing.xl, marginHorizontal: spacing.lg }}
      >
        Payment
      </Text>

      <ListItem title="Satim" />
    </ScrollView>
  );
};

export default MyProfile;
