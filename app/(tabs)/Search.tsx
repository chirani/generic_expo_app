import { View } from "react-native";
import React from "react";
import SearchBar from "components/SearchBar";
import Container from "@UI/Container";
import { spacing } from "@UI/Theme";
import Tabs from "@UI/Tabs";

const Search = () => {
  return (
    <View>
      <Container style={{ margin: spacing.xl }}>
        <SearchBar />
        <Tabs
          titles={["Recent", "Saved"]}
          index={0}
          setTabIndex={(index: number) => {}}
        />
      </Container>
    </View>
  );
};

export default Search;
