import React from "react";
import { View, Text, Image } from "react-native";
import right_arrows from "../src/images/right_arrows.png"

export default function Banner() {

    return <View style={{ padding: 16, marginHorizontal: 16, marginBottom: 16, backgroundColor: "#EbEBEB", borderRadius: 16 }}>
        <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Descubra o valor do empréstimo que você pode levar agoramesmo:</Text>
        </View>

        <View style>
            <Text style={{
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 32,
                marginBottom: 16,

                // height: 3,
                // width: 150,
                // shadowOpacity: 1,
                // shadowColor: '#000',
                // shadowOffset: { width: 10, height: 10 },
                // shadowRadius: 5,
                // elevation: 5,
                // borderWidth: 0.5,
                // borderColor: "white",
                // backgroundColor: "rgba(255, 255, 255, 1)"

            }}>R$ 10.000,00
            </Text>
        </View>

        <View style={{ justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#F8386A" }}>Descubra o valor <Image source={right_arrows}></Image></Text>
        </View>
    </View>
}
