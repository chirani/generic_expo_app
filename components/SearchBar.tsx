import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
interface SearchBarProps extends TextInputProps {
  forwardedRef?: React.RefObject<TextInput>;
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <View style={{ borderWidth: 2, borderColor: "#22222", borderRadius: 50 }}>
      <TextInput
        ref={props.forwardedRef}
        {...props}
        placeholder="Search Products, Sellers..."
        style={{
          paddingVertical: 8,
          paddingHorizontal: 24,
          fontSize: 18,
        }}
        cursorColor="tomato"
      />
    </View>
  );
};

export default SearchBar;
