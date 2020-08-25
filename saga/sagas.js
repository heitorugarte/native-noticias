import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { buscarNoticiasPais, buscarNoticiasPorPalavra } from "../Api";

function* fetchNoticiasCountry(action) {
  try {
    const listaNoticias = yield call(buscarNoticiasPais, action.country);
    yield put({ type: "noticia/updateLista", listaNoticias: listaNoticias });
  } catch (e) {
    console.log("Erro: não foi possível consultar a lista de notícias.");
  }
}

function* fetchNoticiasQuery(action) {
  try {
    const listaNoticias = yield call(buscarNoticiasPorPalavra, action.query);
    yield put({ type: "noticia/updateLista", listaNoticias: listaNoticias });
  } catch (e) {
    console.log("Erro: não foi possível consultar a lista de notícias.");
  }
}

export default function* mySaga() {
  yield takeLatest("requestNoticias/country", fetchNoticiasCountry);
  yield takeLatest("requestNoticias/query", fetchNoticiasQuery);
}
