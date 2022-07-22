import React from "react";
import { SafeAreaView, ScrollView, View, Section, Text } from "react-native";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

export default function App() {
    return <SafeAreaView>
        <ScrollView>
            <Header/>
            <Carousel/>
        </ScrollView>
    </SafeAreaView>
}
