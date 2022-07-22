import React from "react";
import Rounded from "../components/Rounded";
import { View } from "react-native";

export default function FabButton({ bgColor, image }) {

    return <View style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
    }}>
        <Rounded bgColor={bgColor} image={image} />
    </View>
}
