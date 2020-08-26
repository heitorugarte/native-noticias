import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Picker
} from "react-native";
import { connect } from "react-redux";
import paises from "./Paises";

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
          props.dispatch({
            type: "requestNoticias/query",
            query: event.nativeEvent.text
          });
        }}
      />
      <Picker
        style={styles.modalPicker}
        selectedValue={props.countryAtual}
        onValueChange={(itemValue, itemIndex) => {
          props.dispatch({
            type: "requestNoticias/country",
            country: itemValue
          });
        }}
      >
        {createPickerOptions(paises)}
      </Picker>
    </View>
  );
};

const createPickerOptions = paises => {
  let pickerItems = [];
  let keys = Object.keys(paises);
  let values = Object.values(paises);

  pickerItems.push(
    keys.map(function(key, index) {
      return (
        <Picker.Item label={values[index]} value={keys[index]} key={key} />
      );
    })
  );
  return pickerItems;
};

const mapHeaderToProps = state => {
  return {
    countryAtual: state.countryAtual
  };
};

export default connect(mapHeaderToProps)(Header);

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
    marginLeft: 5,
    marginBottom: 10,
    backgroundColor: "#22aa4A",
    fontSize: 16,
    width: "45%",
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
    borderBottomWidth: 1,
    color: "white"
  },
  modalPicker: {
    width: "45%",
    height: 32,
    marginRight: 10,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 32,
    backgroundColor: "#22aa4A",
    color: "white"
  }
});
