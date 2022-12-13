import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import COLORS from "../../constants/COLORS";
const windowWidth = Dimensions.get("window").width;

const CardList = () => {
  const cards = [
    {
      id: 1,
      image: require("../../assets/images/visa.png"),
      name: "Visa",
      amount: "$1,020.92",
    },
    {
      id: 2,
      image: require("../../assets/images/master.png"),
      name: "Master",
      amount: "$1890.30",
    },
  ];
  return cards.map((card) => (
    <View
      key={card.id}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: verticalScale(8),
        padding: moderateScale(12),
        backgroundColor: COLORS.greyNew,
        borderRadius: moderateScale(10)        
      }}
    >
      <View style={{flexDirection: 'row',}}>
        <Image
          source={card.image}
          alt={card.name}
          width={scale(65)}
          height={verticalScale(40)}
        />
        <View style={{marginHorizontal:moderateScale(16), justifyContent:'center',}}>
          <Text style={{fontFamily: 'Lato-Bold', fontSize: moderateScale(16)}}>{card.amount}</Text>
          <Text style={{fontFamily: 'Lato-Regular', fontSize:moderateScale(16), color: COLORS.grey}}>{card.name}</Text>
        </View>
      </View>

      <TouchableOpacity style={{ }}>
        <Ionicons
          name="chevron-forward-outline"
          color={COLORS.primaryNew}
          size={moderateScale(24)}
        />
      </TouchableOpacity>
    </View>
  ));
};

export default CardList;
