import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./features/Header";
import Conteudo from "./features/Conteudo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Reducers/NewsReducer";
import SideMenu from "./features/SideMenu";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Conteudo />
        <SideMenu />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007C4A",
    alignItems: "center",
    width: "100%"
  }
});
