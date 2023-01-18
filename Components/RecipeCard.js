import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const RecipeCard = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalsecond, setModalSecond] = useState(false);

  const modales = () => {
    setModalVisible(true);
    setModalSecond(true);
  };
  const modal2 = () => {
    setModalVisible(true);
    setModalSecond(false);
  };

  return (
    <View style={styles.card}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalText}>
                {modalVisible === modalsecond
                  ? data.ingredients
                  : data.Preparacion}
              </Text>
            </ScrollView>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.topCard}>
        <Image style={styles.image} source={{ uri: data.image }} />
      </View>

      <View style={styles.botCard}>
        <Text style={styles.title}>{data.name}</Text>

        <Text style={styles.description}>{data.bio}</Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.boton} onPress={() => modales()}>
            <FontAwesome5 name="list-alt" size={34} color="orange" />
            <Text style={styles.ingredientes}>Ingredientes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton} onPress={() => modal2()}>
            <Entypo name="bowl" size={34} color="orange" />
            <Text style={styles.ingredientes}>A Cocinar!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.icons}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="time-slot" size={24} color="white" />
            <Text style={styles.Texticons}>{data.time}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={24}
              color="white"
            />
            <Text style={styles.Texticons}>{data.portions}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "rgba(52, 52, 52, 0.1)",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 20,
    height: 550,
  },
  topCard: {
    height: 120,
  },
  botCard: {
    backgroundColor: "#053f5e",
    height: 300,
    width: "100%",
    flex: 1,
    borderRadius: 10,
    zIndex: -1,
    marginBottom: 100,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 55,
    color: "white",
  },
  description: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 17,
    color: "white",
    textAlign: "center",
  },
  image: {
    width: 250,
    height: 150,
    position: "absolute",
    top: 15,
    alignSelf: "center",
    zIndex: 2,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#E58E19",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
  },
  Texticons: {
    fontSize: 18,
    paddingLeft: 10,
    color: "white",
  },
  boton: {
    marginTop: 10,
    flexDirection: "row",
    textAlignVertical: "center",
  },
  ingredientes: {
    color: "orange",
    marginHorizontal: 10,
    marginTop: 5,
    fontSize: 19,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: 450,
    width: "96%",
    backgroundColor: "white",
    borderRadius: 40,
    padding: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
    width: 100,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "justify",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
