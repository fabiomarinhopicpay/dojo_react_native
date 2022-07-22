import React from "react";
import { View, Image } from "react-native";

export default function Rounded({ bgColor, image }) {

    return <View style={{
        alignSelf: "center",
        backgroundColor: bgColor,
        padding: 16,
        borderRadius: 100,
        width: 55
    }}>
        <Image source={image} />
    </View>
}
