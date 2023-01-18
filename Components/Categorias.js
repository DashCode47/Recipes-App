import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Sopas from "./Screens/Sopas";
const Categorias = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <View style={styles.categ}>
        <TouchableOpacity onPress={() => navigation.navigate("Sopas")}>
          <Text style={styles.titles}>Sopas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categ}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.titles}>Fuertes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categ}>
        <TouchableOpacity onPress={() => navigation.navigate("Postres")}>
          <Text style={styles.titles}>Postres</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categ}>
        <TouchableOpacity onPress={() => navigation.navigate("Bebidas")}>
          <Text style={styles.titles}>Bebidas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Categorias;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 40,
  },
  categ: {
    height: 35,
    width: 100,
    borderRadius: 15,
    backgroundColor: "black",
    marginLeft: 15,
    marginBottom: 10,
    justifyContent: "center",
  },
  titles: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Roboto",
    alignSelf: "center",
  },
});
