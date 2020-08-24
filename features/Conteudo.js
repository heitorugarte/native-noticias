import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import NewsCard from "./NewsCard";
import { connect } from "react-redux";
import { useEffect } from "react";
import { buscarNoticiasPais } from "../Api";

const Conteudo = props => {
  useEffect(() => {
    if (props.listaNoticias.length === 0)
      buscarNoticiasPais("br").then(listaNoticias => {
        props.dispatch({
          type: "noticia/updateLista",
          listaNoticias: listaNoticias
        });
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

const styles = StyleSheet.create({});
