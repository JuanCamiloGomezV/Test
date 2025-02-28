import useChangeBackgroundColorApp from "@/hooks/useChangeBackgroundColorApp";
import { Text, TouchableOpacity } from "react-native";

export default function Index() {
  const { backgroundColor, onChangeBackgroundColor } =
    useChangeBackgroundColorApp();

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
      onPress={onChangeBackgroundColor}
    >
      <Text style={{ fontSize: 40, color: "white" }}>Hello there</Text>
    </TouchableOpacity>
  );
}
