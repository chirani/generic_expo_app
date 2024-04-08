import { View } from "react-native";
import React from "react";
import SearchBar from "components/SearchBar";
import Container from "@UI/Container";
import { spacing } from "@UI/Colors";

const Search = () => {
  return (
    <View>
      <Container style={{ margin: spacing.xl }}>
        <SearchBar />
      </Container>
    </View>
  );
};

export default Search;
