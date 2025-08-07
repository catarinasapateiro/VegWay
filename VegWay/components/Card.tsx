import { View, Text, Image } from "react-native";
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
  RadarChart,
} from "react-native-gifted-charts";
import { ImageSourcePropType } from "react-native";

type Card = {
  title: string;
  subtitle: string;
  icon: ImageSourcePropType;
};

const Card = ({ title, subtitle, icon }) => {
  const data = [
    { value: 50, color: "#ff7980ff" },
    { value: 80, color: "rgba(244, 179, 17, 1)" },
    { value: 90, color: "#ce5646ff" },
    { value: 70, color: "#748d32" },
  ];

  return (
    <View className="h-64 w-48 p-3 bg-darkbluet rounded-xl gap-2 justify-center items-center">
      <View className="flex-row gap-1">
        <Image
          source={icon}
          style={{ width: 28, height: 28, tintColor: "#da7b7fff" }}
        ></Image>
        <View>
          <Text className="text-sm text-primary">{title}</Text>
          <Text className="text-xs text-orange mb-2">{subtitle}</Text>
        </View>
      </View>
      <PieChart
        donut
        showValuesAsLabels
        radius={50}
        innerRadius={38}
        innerCircleColor="#16232eff"
        data={data}
        textSize={16}
        innerCircleBorderColor="transparent"
      />
    </View>
  );
};

export default Card;
