import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../../constants/COLORS";
import FONTS from "../../constants/FONTS";
import SIZES from "../../constants/SIZES";

const reciepients = [
  {
    id: 1,
    image: require("../../assets/images/mark.png"),
    name: "Mark",
  },
  {
    id: 2,
    image: require("../../assets/images/jane.png"),
    name: "Jane",
  },
  {
    id: 3,
    image: require("../../assets/images/jason.png"),
    name: "Jason",
  },
];

const SelectReciepientList = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View style={{ alignItems: "center", marginRight: moderateScale(34) }}>
        <TouchableOpacity>
          <View
            style={{
              height: moderateScale(58),
              width: moderateScale(58),
              borderRadius: 100,
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.primaryNew,
              marginBottom: verticalScale(10),
            }}
          >
            <Ionicons
              name="add-outline"
              color={COLORS.white}
              size={moderateScale(24)}
            />
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: moderateScale(SIZES.smallFontSize),
            fontFamily: FONTS.latoRegular,
          }}
        >
          Add
        </Text>
      </View>

      {reciepients.map((reciepient) => (
        <TouchableOpacity>
          <View
            style={{ alignItems: "center", marginRight: moderateScale(34) }}
          >
            <Image
              style={{ marginBottom: verticalScale(10) }}
              source={reciepient.image}
              alt={reciepient.name}
            />
            <Text
              style={{
                fontSize: moderateScale(SIZES.smallFontSize),
                fontFamily: FONTS.latoRegular,
              }}
            >
              {reciepient.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SelectReciepientList;
