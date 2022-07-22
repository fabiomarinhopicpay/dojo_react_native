import React from "react";
import { View, Text, ScrollView } from "react-native";
import Card from "./Card";

export default function Carousel() {

    return <View style={{ padding: 16 }}>
        <View>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Para você </Text>
        </View>

        <ScrollView horizontal={true} style={{ marginTop: 8 }}>
            <Card
                corCard={"#00BA53"}
                textoTitulo={"Parcelar boletos em até 12x. Só no PicPay, Aproveite!"}
                textoTag={"OPORTUNIDADE"}
            />
            <Card
                corCard={"#00BA53"}
                textoTitulo={"Suas compras com muito dinheiro de volta para economizar. Aproveite!"}
                textoTag={"OPORTUNIDADE"}
            />
            <Card
                corCard={"#BA55D3"}
                textoTitulo={"Cadastre suas contas na Agenda, seja lembrado e nunca mais atrase boletos"}
                textoTag={"RECOMENDAÇÃO"}
            />
        </ScrollView>
    </View>
}
