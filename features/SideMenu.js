import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image
} from "react-native";
import { connect } from "react-redux";
import { buscarNoticiasPais } from "../Api";

const SideMenu = props => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      style={styles.modal}
      visible={props.sideMenuVisible}
    >
      <View style={styles.sideMenu}>
        <TouchableOpacity
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            buscarNoticiasPais("us").then(listaNoticias => {
              props.dispatch({
                type: "noticia/updateLista",
                listaNoticias: listaNoticias
              });
            });
            props.dispatch({
              type: "sideMenu/hide"
            });
          }}
        >
          <View style={styles.btnView}>
            <Image
              source={require("../assets/usa.png")}
              style={styles.btnImg}
            />
            <Text style={styles.btn}>USA</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            buscarNoticiasPais("br").then(listaNoticias => {
              props.dispatch({
                type: "noticia/updateLista",
                listaNoticias: listaNoticias
              });
            });
            props.dispatch({
              type: "sideMenu/hide"
            });
          }}
        >
          <View style={styles.btnView}>
            <Image
              source={require("../assets/brazil.png")}
              style={styles.btnImg}
            />
            <Text style={styles.btn}>Brasil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            props.dispatch({
              type: "noticia/mostrarSalvas"
            });
            props.dispatch({
              type: "sideMenu/hide"
            });
          }}
        >
          <View style={styles.btnView}>
            <Image
              source={require("../assets/save.png")}
              style={styles.btnImg}
            />
            <Text style={styles.btn}>Favoritos</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const mapSideMenuToProps = state => {
  return {
    sideMenuVisible: state.sideMenuVisible
  };
};

export default connect(mapSideMenuToProps)(SideMenu);

const styles = StyleSheet.create({
  sideMenu: {
    marginTop: "15%",
    height: "93%",
    width: "50%",
    backgroundColor: "#007C4A",
    alignSelf: "flex-end",
    borderTopWidth: 1,
    borderLeftWidth: 1
  },
  btnView: {
    backgroundColor: "#2C73D2",
    flexDirection: "row",
    margin: 2,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  btn: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "bold"
  },
  btnImg: {
    width: 32,
    height: 32
  }
});