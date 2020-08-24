import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Portal Notícias</Text>
      <TouchableOpacity
        style={styles.btnMenu}
        onPress={() => {
          props.dispatch({
            type: "sideMenu/show"
          });
        }}
      >
        <Image
          style={styles.btnMenuImg}
          source={require("../assets/menu.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(Header);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingTop: StatusBar.currentHeight + 10,
    borderBottomWidth: 2,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  headerTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    paddingHorizontal: 35
  },
  btnMenuImg: {
    width: 32,
    height: 32
  }
});
