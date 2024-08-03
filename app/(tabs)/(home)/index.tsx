import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  const items = ["A", "B", "C"];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <View
        style={{
          gap: 4,
          marginTop: 8,
        }}
      >
        {items.map((item) => (
          <Link
            key={item}
            href={`/items/${item}`}
            style={{
              borderWidth: 1,
              borderRadius: 4,
              paddingVertical: 2,
              paddingHorizontal: 8,
            }}
          >
            Item {item}
          </Link>
        ))}
      </View>
    </View>
  );
}
