import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../constants/COLORS";
import SIZES from "../constants/SIZES";
import Wallet from "../components/Dasboard/Wallet";

const Dasboard = () => {
  return (
    <View
      style={{
        marginTop: verticalScale(45),
        paddingHorizontal: scale(20),
        paddingVertical: moderateScale(5),
      }}
    >
      {/* TopMost Bar  */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: "Lato-Regular",
            fontSize: moderateScale(SIZES.normalFontSize),
          }}
        >
          Current Balance
        </Text>
        <TouchableOpacity>
          <Ionicons
            name="notifications"
            color={COLORS.primaryNew}
            size={moderateScale(24)}
          />
        </TouchableOpacity>
      </View>
      {/* TopMost Bar  */}

      {/* Current Balance */}
      <Text
        style={{
          fontFamily: "Lato-Bold",
          fontSize: moderateScale(SIZES.currentBalance),
        }}
      >
        $ 2,090.20
      </Text>
      {/* Current Balance */}

      {/* Wallet */}
      <Wallet/>
      {/* Wallet */}

      
    </View>
  );
};

export default Dasboard;
