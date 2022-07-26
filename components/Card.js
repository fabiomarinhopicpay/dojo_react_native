import React from "react";
import { View, Text } from "react-native";
import save_money from "../src/images/save_money.png"
import Rounded from "./Rounded";

export default function Card({ textoTitulo, textoTag, corCard }) {

    return <View style={{ padding: 8 }}>
        <View style={{ backgroundColor: corCard, padding: 16, borderRadius: 16, width: 210, height: 280 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>{textoTitulo}</Text>
            </View>

            <View style={{ flex: 1, alignSelf: "center", alignItems: "center", flexDirection: 'row' }}>
                <Text style={{ color: "#271242", fontSize: 18, fontWeight: "bold" }}>Guia bolso</Text>
                <Text style={{ color: "green", fontSize: 20, fontWeight: "bold" }}> + </Text>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>PicPay</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Rounded bgColor={"white"} image={save_money} />
                <View style={{ alignItems: 'center', marginTop: 16 }}>
                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>{textoTag}</Text>
                </View>
            </View>
        </View>
    </View>
}
