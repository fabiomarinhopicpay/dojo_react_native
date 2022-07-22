import React from "react";
import { View, Text, Image } from "react-native";
import dots from "../src/images/dots.png"

export default function Planning({ renda }) {

    return <View style={{ padding: 16, marginHorizontal: 16, marginBottom: 76, backgroundColor: "#EbEBEB", borderRadius: 16 }}>
        <View style={{ marginTop: 8, justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Planejamento do mês</Text>
            <Image source={dots}></Image>
        </View>

        <View style={{ marginTop: 16 }}>
            <Text style={{ color: "#8B8682" }}>Renda</Text>
        </View>

        <View style>
            <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 4 }}>R$ 100,00</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1, textAlign: "right" }}>planejados </Text>
            <Text style={{ fontWeight: "bold" }}>R$ 500,00</Text>
        </View>

        <View>
            <View style={{ height: 16, backgroundColor: "#B0E2FF", marginVertical: 2 }} />
        </View>

        <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: "bold" }}>R$ 400,00</Text>
            <Text> para alcançar o planejamento</Text>
        </View>

        <View>
            <Text></Text>
        </View>
    </View>
}

