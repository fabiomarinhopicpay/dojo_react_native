import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FabButton from "../components/FabButton";
import plus from "../src/images/plus.png"
import Planning from "../components/Planning";
import BottomNavigation from "../components/BottomNavigation";

export default function App() {


    return <SafeAreaView>
        <ScrollView>
            <Header />
            <Carousel />
            <Banner />
            <Planning />
        </ScrollView>
        <BottomNavigation />
        <FabButton bgColor={"#F8386A"} image={plus} />
    </SafeAreaView>
}
