import { View, Text, Image, ScrollView } from "react-native";
import { icons } from "@/assets/constants/icons";
import Header from "@/components/Header";
import Card from "@/components/Card";

export default function Index() {
  return (
    <View className="flex-1  bg-dark ">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <View className="mt-20 flex-row justify-center items-center">
          <Image source={icons.logo} className="size-8"></Image>
          <Text className="text-4xl text-primary font-bold leading-[1.3]">
            VegWay
          </Text>
        </View>

        <View className="flex-1 mt-5">
          <Header />
          <View className="mt-4 ">
            <Text className="ml-4 text-xl text-primary mb-4">See all</Text>
            <View className="flex-row flex-wrap gap-5 justify-center items-center ">
              <Card
                title="Daily calories"
                subtitle="2000 kcal"
                icon={icons.calories}
                innerText="80%"
              />
              <Card
                title="Macronutrients"
                subtitle=""
                icon={icons.macronutrients}
                innerText="60%"
              />
              <Card
                title="Vitamins"
                subtitle="micronutrients"
                icon={icons.vitamins}
                innerText="60%"
              />
              <Card
                title="Minerals"
                subtitle="micronutrients"
                icon={icons.minerals}
                innerText="60%"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
