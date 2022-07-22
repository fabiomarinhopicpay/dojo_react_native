import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function App() {
    return <SafeAreaView>
        <ScrollView>
            <Header/>
            <Carousel/>
            <Banner/>
        </ScrollView>
    </SafeAreaView>
}
