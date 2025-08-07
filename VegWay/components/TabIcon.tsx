import React from "react";
import { View, Image } from "react-native";

const TabIcon = ({ icon, focused }: any) => {
  if (focused) {
    return (
      <View className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden">
        <Image
          source={icon}
          style={{ tintColor: "#f8555dff" }}
          className="size-7"
        />
      </View>
    );
  } else {
    return (
      <View className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden">
        <Image
          source={icon}
          style={{ tintColor: "#ff7980ff" }}
          className="size-7"
        />
      </View>
    );
  }
};

export default TabIcon;
