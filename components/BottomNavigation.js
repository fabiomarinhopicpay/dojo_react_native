import React from "react";
import { View, Text, Image } from "react-native";
import { Dimensions } from "react-native";
import bars from "../src/images/bars.png"
import finance from "../src/images/finance.png"
import bag from "../src/images/bag.png"
import settings from "../src/images/settings.png"

export default function BottomNavigation() {

    var width = Dimensions.get('window').width

    return <View>
        <View style={{ height: 1, width: width, backgroundColor: "#BEBEBE", position: "absolute", bottom: 63 }} />
        <View style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: "#F5F5F5",
            alignSelf: 'center',
            width: width,
            position: "absolute",
            bottom: 0,
        }}>
            <View style={{ justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
                <Item text={"Finanças"} image={bars}></Item>
                <Item text={"Emprestimo"} image={finance}></Item>
                <Item text={"Soluções"} image={bag}></Item>
                <Item text={"Ajustes"} image={settings}></Item>
            </View>
        </View>
    </View>
}

export function Item({ text, image }) {

    return <View style={{ alignItems: "center" }}>
        <Text style={{ marginBottom: 4 }}>{text}</Text>
        <Image source={image} />
    </View>
}
