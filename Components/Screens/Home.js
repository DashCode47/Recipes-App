import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Recipes } from "../../assets/Data/dummy";
import RecipeCard from "../RecipeCard";
import Header from "../Header";
import Categorias from "../Categorias";

const image = {
  uri: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZyUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

const HomeScreen = () => {
  const [recetas, setRecetas] = useState(Recipes);
  const handleSearch = (value) => {
    if (!value.length) return setRecetas(Recipes);

    const filterData = Recipes.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filterData.length) {
      setRecetas(filterData);
    } else {
      setRecetas(Recipes);
    }
  };
  return (
    <ImageBackground
      source={image}
      resizeMode="stretch"
      style={styles.background}
    >
      <Header onSearch={handleSearch} />
      <FlatList
        data={recetas}
        renderItem={({ item }) => <RecipeCard data={item} />}
        keyExtractor={(item) => item.id}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={570}
      />
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#EDD92A",
    marginTop: StatusBar.currentHeight + 10,
  },
});
