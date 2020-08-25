import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./features/Header";
import Conteudo from "./features/Conteudo";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import reducer from "./Reducers/NewsReducer";
import SideMenu from "./features/SideMenu";
import { PersistGate } from "redux-persist/integration/react";
import mySaga from "./saga/sagas";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(mySaga);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Header />
          <Conteudo />
          <SideMenu />
        </View>
      </PersistGate>
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
