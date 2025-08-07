import React, { useState } from "react";
import { View, Text } from "react-native";
import Dropdown from "./Dropdown";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Vegan", value: "vegan" },
  ]);
  const [date, setDate] = useState("4th August 2025");

  return (
    <View className="flex-col items-center justify-center bg-darkbluet p-5 mt-4 rounded-3xl gap-5 ">
      <View className="flex-row items-center justify-between w-full">
        <Text className="text-primary text-xl">Date</Text>
        <Text className="text-gray-400 justify-start items-start  mr-[105px]">
          {date}
        </Text>
      </View>
      <View className="flex-row items-center justify-between w-full ">
        <Text className=" self-center text-primary text-xl">Diet</Text>
        <Dropdown items={items} open={open} setOpen={setOpen} />
      </View>
    </View>
  );
};

export default Header;
