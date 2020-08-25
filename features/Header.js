import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput
} from "react-native";
import { connect } from "react-redux";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>BizuNotícias</Text>
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
      <TextInput
        style={styles.queryInput}
        placeholder="Pesquisar..."
        onSubmitEditing={event => {
          console.log(event.nativeEvent.text);
          props.dispatch({
            type: "requestNoticias/query",
            query: event.nativeEvent.text
          });
        }}
      />
    </View>
  );
};

export default connect()(Header);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingTop: StatusBar.currentHeight + 15,
    borderBottomWidth: 2,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap"
  },
  headerTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    paddingHorizontal: 10
  },
  btnMenuImg: {
    margin: 10,
    width: 32,
    height: 32
  },
  queryInput: {
    padding: 5,
    margin: 5,
    backgroundColor: "#22aa4A",
    fontSize: 16,
    width: 256,
    height: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 32,
    borderRadius: 3,
    borderBottomWidth: 1
  }
});
