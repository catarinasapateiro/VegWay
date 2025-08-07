import { Text, View } from "react-native";
import "./global.css";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-primary font-bold leading-[1.2]">
        VegWay
      </Text>
      <Link href="/learn">learn</Link>
    </View>
  );
}
