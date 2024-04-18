import { spacing } from "./Theme";
import Text from "./Text";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ListItemProps extends TouchableOpacityProps {
  title: string;
}

const ListItem = (props: ListItemProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        paddingHorizontal: 18,
        marginHorizontal: spacing.lg,
        paddingVertical: 9,
        borderRadius: 8,
      }}
    >
      <Text style={{ fontSize: 20 }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
