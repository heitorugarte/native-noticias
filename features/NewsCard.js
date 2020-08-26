import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking
} from "react-native";
import { connect } from "react-redux";

const Card = props => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.imagem}
        source={{ uri: props.noticia.urlToImage }}
      ></Image>
      <Text
        style={styles.manchete}
        onPress={() => Linking.openURL(props.noticia.url)}
      >
        {props.noticia.title}
      </Text>
      {!props.salvo ? (
        <TouchableOpacity
          style={styles.viewSalvar}
          onPress={() => {
            props.dispatch({
              type: "noticia/salvar",
              noticia: props.noticia
            });
          }}
        >
          <Text style={styles.btnSalvar}>Salvar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.viewExcluir}
          onPress={() => {
            props.dispatch({
              type: "noticia/excluir",
              noticia: props.noticia
            });
          }}
        >
          <Text style={styles.btnExcluir}>Excluir</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.conteudo}>{props.noticia.content}</Text>
    </View>
  );
};

export default connect()(Card);

const styles = StyleSheet.create({
  card: {
    marginVertical: 2,
    borderWidth: 2,
    width: "100%",
    height: 500,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 32,
    borderRadius: 3,
    justifyContent: "space-between"
  },
  imagem: {
    width: "100%",
    height: 150
  },
  manchete: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#007C4A",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2
  },
  conteudo: {
    fontSize: 15,
    fontFamily: "Roboto"
  },
  viewSalvar: {
    borderWidth: 1,
    borderColor: "#2C73D2",
    backgroundColor: "#0081CF",
    width: 128,
    height: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 32,
    justifyContent: "center",
    borderRadius: 5
  },
  btnSalvar: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  btnExcluir: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  viewExcluir: {
    borderWidth: 1,
    borderColor: "#2C73D2",
    backgroundColor: "red",
    width: 128,
    height: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 32,
    justifyContent: "center",
    borderRadius: 5
  }
});
