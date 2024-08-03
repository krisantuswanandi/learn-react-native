import { Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function Index() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const nav = useNavigation();

  nav.setOptions({ title: `Item ${id}` });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Item {id}</Text>
    </View>
  );
}
