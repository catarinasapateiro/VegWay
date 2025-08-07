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

const Card = ({ title, subtitle, icon, innerText }) => {
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
          style={{ width: 28, height: 28, tintColor: "#f77e38ff" }}
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
        innerCircleColor="#eeedecff"
        data={data}
        textSize={16}
        innerCircleBorderColor="transparent"
        centerLabelComponent={() => {
          return (
            <View>
              <Text style={{ color: "grey", fontSize: 12 }}>{innerText}</Text>
              <Text style={{ color: "gray", fontSize: 8 }}>Total</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Card;
