import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

type DropdownProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  items: { label: string; value: string }[];
};

const screenWidth = Dimensions.get("window").width;

const Dropdown = ({ open, setOpen, items }) => {
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder="Select diet"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={styles.text}
        placeholderStyle={styles.placeholder}
        arrowIconStyle={styles.arrowIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    paddingHorizontal: 20,
    zIndex: 999,
  },
  dropdown: {
    width: screenWidth * 0.55,
    height: screenWidth * 0.1,
    backgroundColor: "transparent",
    borderColor: "rgba(66, 124, 117, 0.4)",
    borderWidth: 0.3,
    borderRadius: 12,
    padding: 0,
  },
  dropdownContainer: {
    backgroundColor: "none",
    borderColor: "transparent",
    borderRadius: 8,
  },
  text: {
    color: "#fff",
  },
  placeholder: {
    color: "#aaa",
  },
  arrowIcon: {
    tintColor: "#fff",
  },
});

export default Dropdown;

