import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
interface SearchBarProps extends TextInputProps {}

const SearchBar = (props: SearchBarProps) => {
  return (
    <View style={{ borderWidth: 2, borderColor: "#22222", borderRadius: 50 }}>
      <TextInput
        placeholder="Search Products, Sellers..."
        style={{
          paddingVertical: 8,
          paddingHorizontal: 24,
          fontSize: 18,
        }}
        cursorColor="tomato"
        {...props}
      />
    </View>
  );
};

export default SearchBar;
