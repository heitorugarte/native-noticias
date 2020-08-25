import React from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import NewsCard from "./NewsCard";
import { connect } from "react-redux";
import { useEffect } from "react";

const Conteudo = props => {
  useEffect(() => {
    if (props.listaNoticias.length === 0)
      props.dispatch({
        type: "requestNoticias/country",
        country: "br"
      });
  });
  return (
    <FlatList
      keyExtractor={() => Math.random().toString()}
      data={props.listaNoticias}
      renderItem={item => {
        if (item.item.content && item.item.title)
          return <NewsCard noticia={item.item} />;
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    listaNoticias: state.listaNoticias,
    listaNoticiasSalvas: state.listaNoticiasSalvas
  };
};

export default connect(mapStateToProps)(Conteudo);
