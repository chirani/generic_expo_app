import {
  ScrollView,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Text } from "@UI";
import React from "react";
import { spacing } from "@UI/Theme";
import { router } from "expo-router";

const MyProfile = () => {
  return (
    <ScrollView>
      <Text
        size="h3"
        style={{ marginBottom: spacing.xl, marginHorizontal: spacing.lg }}
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

interface SearchListItemProps extends TouchableOpacityProps {
  title: string;
}

const ListItem = (props: SearchListItemProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        paddingHorizontal: 18,
        marginHorizontal: spacing.lg,
        paddingVertical: 9,
        borderRadius: 8,
        marginBottom: spacing.lg,
      }}
    >
      <Text style={{ fontSize: 20 }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MyProfile;
