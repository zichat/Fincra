import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../../constants/COLORS";
import FONTS from "../../constants/FONTS";
import SIZES from "../../constants/SIZES";

const Header = ({text}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: verticalScale(30),
        paddingVertical: verticalScale(15),
        elevation: 20
      }}
    >
      <TouchableOpacity>
        <Ionicons
          name="chevron-back-outline"
          color={COLORS.primaryNew}
          size={moderateScale(24)}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: moderateScale(SIZES.xLargeFontSize),
          fontFamily: FONTS.latoRegular,
          marginHorizontal: moderateScale(4),
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Header;
