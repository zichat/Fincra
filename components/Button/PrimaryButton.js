import { View, Text } from "react-native";
import React from "react";
import COLORS from "../../constants/COLORS";
import FONTS from "../../constants/FONTS";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import SIZES from "../../constants/SIZES";

const PrimaryButton = ({ text }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primaryNew,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: moderateScale(18),
        borderRadius: moderateScale(16),
        marginTop: verticalScale(78)
        

      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontFamily: FONTS.latoRegular,
          fontSize: moderateScale(SIZES.normalFontSize),
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default PrimaryButton;
