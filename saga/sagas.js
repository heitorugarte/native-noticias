import { call, put, takeLatest } from "redux-saga/effects";
import { buscarNoticiasPais, buscarNoticiasPorPalavra } from "../Api";
import { Alert } from "react-native";

function* fetchNoticiasCountry(action) {
  try {
    const listaNoticias = yield call(buscarNoticiasPais, action.country);
    yield put({
      type: "noticia/updateLista",
      listaNoticias: listaNoticias,
      countryAtual: action.country
    });
  } catch (e) {
    Alert.alert("Erro", e);
  }
}

function* fetchNoticiasQuery(action) {
  try {
    if (action.query === "") throw "Informe um parâmetro para a pesquisa!";
    const listaNoticias = yield call(buscarNoticiasPorPalavra, action.query);
    yield put({
      type: "noticia/updateLista",
      listaNoticias: listaNoticias,
      countryAtual: "qry"
    });
  } catch (e) {
    Alert.alert("Erro", e);
  }
}

export default function* mySaga() {
  yield takeLatest("requestNoticias/country", fetchNoticiasCountry);
  yield takeLatest("requestNoticias/query", fetchNoticiasQuery);
}
