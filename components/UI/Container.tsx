import { View, ViewProps, ViewStyle } from 'react-native';
import React from 'react';

interface ContainerProps extends ViewProps {
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  flexDirection?: ViewStyle['flexDirection'];
  flex?: number;
}
const Container: React.FC<ContainerProps> = (props) => {
  const { flex, justifyContent, alignItems, flexDirection } = props;

  return (
    <View
      {...props}
      style={[
        { alignItems, justifyContent, flex, flexDirection },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

export default Container;
