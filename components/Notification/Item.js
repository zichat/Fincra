import { View, Text } from "react-native";
import React from "react";
import SIZES from "../../constants/SIZES";
import FONTS from "../../constants/FONTS";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const Item = ({title}) => {
  return (
    <Text
      style={{
        fontSize: moderateScale(SIZES.smallFontSize),
        fontFamily: FONTS.latoBold,
        marginTop: verticalScale(26),
        marginBottom: verticalScale(12),
      }}
    >
      {title}
    </Text>
  );
};

export default Item;
