import React from "react";
import { View, Text, Image } from "react-native";
import arrow_down from "../src/images/arrow_down.png"
import open_eye from "../src/images/open_eye.png"

export default function Header({ nomeMes, valorInvest, valorCarteira, valorTotal }) {
    return <View style={{ backgroundColor: "#401C68", padding: 16 }}>

        <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: "white", fontSize: 16 }}>Julho</Text>
            <Image style={{ marginStart: 8 }} source={arrow_down} />
        </View>

        <View style={{ marginTop: 26, justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ color: "white", fontSize: 16 }}>Contas e cartões</Text>
            <Image source={open_eye} />
        </View>

        <View style={{ marginTop: 16, justifyContent: "space-between", flexDirection: 'row' }}>
            <Text style={{ color: "white", fontSize: 14 }}>Investimentos</Text>
            <Text style={{ color: "white", fontSize: 14 }}>R$ 2.030,00</Text>
        </View>

        <View style={{ marginTop: 4, justifyContent: "space-between", flexDirection: 'row' }}>
            <Text style={{ color: "white", fontSize: 14 }}>Carteira</Text>
            <Text style={{ color: "white", fontSize: 14 }}>R$ 200,00</Text>
        </View>

        <View style={{ marginTop: 4, justifyContent: "space-between", flexDirection: 'row' }}>
            <Text style={{ color: "white", fontSize: 14 }}>Total</Text>
            <Text style={{ color: "white", fontSize: 14 }}>R$ 2.230,00</Text>
        </View>

    </View>
}
