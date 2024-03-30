import {
  Text,
  Pressable,
  PressableProps,
  TextStyle,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface ButtonProps extends PressableProps {
  title: string;
  textStyle?: TextStyle;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'regular' | 'outline' | 'transparent';
}

const Button: React.FC<ButtonProps> = (props) => {
  const isPressed = useSharedValue(false);
  const scale = useSharedValue(1);

  const getButtonStyle = () => {
    switch (props.size) {
      case 'sm':
        return styles.smallButton;
      case 'md':
        return {};
      case 'lg':
        return styles.largeButton;
      case 'xl':
        return styles.xlargeButton;
      default:
        return {};
    }
  };

  const getButtonTextStyle = () => {
    switch (props.size) {
      case 'sm':
        return textStyles.smallButtonText;
      case 'md':
        return {};
      case 'lg':
        return textStyles.largeButtonText;
      case 'xl':
        return textStyles.xlargeButtonText;
      default:
        return {};
    }
  };

  const getButtonTypeStyle = () => {
    switch (props.type) {
      case 'regular':
        return buttonTypeStyles.regular;
      case 'transparent':
        return buttonTypeStyles.transparent;
      case 'outline':
        return buttonTypeStyles.outline;
      default:
        return {};
    }
  };

  const getButtonTextTypeStyle = () => {
    switch (props.type) {
      case 'regular':
        return buttonTextTypeStyle.regular;
      case 'transparent':
        return buttonTextTypeStyle.transparent;
      case 'outline':
        return buttonTextTypeStyle.outline;
      default:
        return {};
    }
  };

  const handlePressIn = () => {
    isPressed.value = true;
    scale.value = withSpring(0.9);
  };

  const handlePressOut = () => {
    isPressed.value = false;
    scale.value = withSpring(1);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        style={[styles.button, getButtonStyle(), getButtonTypeStyle()]}
        {...props}
        onPressIn={(e) => {
          handlePressIn();
          props.onPressIn && props.onPressIn(e);
        }}
        onPressOut={(e) => {
          handlePressOut();
          props.onPressOut && props.onPressOut(e);
        }}>
        <Text
          style={[
            textStyles.buttonText,
            getButtonTextStyle(),
            getButtonTextTypeStyle(),
            props.textStyle,
          ]}>
          {props.title}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  smallButton: {
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  largeButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  xlargeButton: {
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
});

const textStyles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  smallButtonText: {
    fontSize: 12,
  },
  largeButtonText: {
    fontSize: 18,
  },
  xlargeButtonText: {
    fontSize: 22,
  },
});

const buttonTypeStyles = StyleSheet.create({
  regular: {},
  outline: {
    backgroundColor: 'transparent',
  },
  transparent: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
});

const buttonTextTypeStyle = StyleSheet.create({
  regular: { fontWeight: '800' },
  outline: {
    color: 'black',
  },
  transparent: {
    color: 'black',
  },
});

export default Button;
