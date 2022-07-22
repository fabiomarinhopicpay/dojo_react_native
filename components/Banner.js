import React from "react";
import { View, Text, Image } from "react-native";
import right_arrows from "../src/images/right_arrows.png"
import plus from "../src/images/plus.png"
import Rounded from "./Rounded";

export default function Banner() {

    return <View style={{ padding: 16, margin: 16, backgroundColor: "#EbEBEB", borderRadius: 16 }}>
        <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Descubra o valor do empréstimo que você pode levar agoramesmo:</Text>
        </View>

        <View>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 32, marginBottom: 16 }}>R$ 2.000,00</Text>
        </View>

        <View style={{ justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#F8386A" }}>Descubra o valor <Image source={right_arrows}></Image></Text>
            <Rounded bgColor={"#F8386A"} image={plus} />
        </View>

    </View>
}
