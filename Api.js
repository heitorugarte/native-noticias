import { connect } from "react-redux";

/**
 * @class Api
 *
 * @summary Classe para manipular os dados da aplicação
 *
 * @since 1.0.0
 * @author Heitor Silveira <heitorsilveirafurb@gmail.com>
 *
 */
export function buscarNoticiasPorPalavra(palavra) {
  if (palavra == "") return this.buscarNoticiasPais("br");
  let query = palavra.trim();
  return new Promise(async result => {
    var url = `http://newsapi.org/v2/everything?q=${query}&apiKey=f9cf82cb0f564cafa2d4871eb1e65723`;
    var req = new Request(url);
    result(
      await new Promise(result => {
        fetch(req)
          .then(response => {
            return response.json();
          })
          .then(json => {
            result(json.articles);
          })
          .catch(e => {
            alert(e);
          });
      })
    );
  });
}

export function buscarNoticiasPais(country) {
  return new Promise(async result => {
    var url = `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=f9cf82cb0f564cafa2d4871eb1e65723`;
    var req = new Request(url);
    result(
      await new Promise(result => {
        fetch(req)
          .then(response => {
            return response.json();
          })
          .then(json => {
            result(json.articles);
          })
          .catch(e => {
            alert(e);
          });
      })
    );
  });
}
