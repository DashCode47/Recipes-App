import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Categorias from "./Categorias";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = ({ onSearch }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
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
            <View style={styles.info}>
              <View style={styles.cabezera}>
                <Ionicons name="md-logo-ionitron" size={44} color="black" />
                <Text style={styles.modTitle}>DavCode</Text>
              </View>

              <View style={styles.mail}>
                <Entypo name="mail" size={28} color="black" />
                <Text style={styles.modalText}>Davsh47@hotmail.com</Text>
              </View>
              <View style={styles.mail}>
                <FontAwesome5 name="whatsapp-square" size={28} color="black" />
                <Text style={styles.modalText}>+79375764627</Text>
              </View>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.logo}>
        <Ionicons name="md-logo-ionitron" size={44} color="black" />
        <Text style={styles.title}>DavCode</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <AntDesign name="exclamationcircle" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="Que cocinaremos hoy?"
          style={{ flex: 1, paddingLeft: 20 }}
          onChangeText={onSearch}
        ></TextInput>
      </View>
      <Categorias />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { marginTop: 15, marginLeft: 15, marginBottom: 15, height: 160 },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingRight: 35,
  },
  logo: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  search: {
    width: "100%",
    borderRadius: 25,
    backgroundColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: 230,
    width: "68%",
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
    justifyContent: "space-between",
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
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "justify",
    marginLeft: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  info: { alignItems: "flex-start" },
  modTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    alignSelf: "center",
    paddingTop: 10,
  },
  cabezera: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    alignSelf: "center",
    flexDirection: "row",
  },
  mail: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
  },
});
