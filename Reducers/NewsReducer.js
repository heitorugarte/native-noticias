export default function reducer(
  state = {
    listaNoticias: [],
    listaNoticiasSalvas: [],
    sideMenuVisible: false,
    countryAtual: "Brasil"
  },
  action
) {
  let novaLista = [];
  switch (action.type) {
    case "noticia/updateLista":
      novaLista = action.listaNoticias;
      let novoCountryAtual = action.countryAtual
        ? action.countryAtual
        : "Query...";
      return {
        ...state,
        listaNoticias: novaLista,
        countryAtual: novoCountryAtual
      };
    case "noticia/salvar":
      let novaListaNoticiaSalva = [...state.listaNoticiasSalvas];
      action.noticia.salvo = true;
      novaListaNoticiaSalva.push(action.noticia);
      return {
        ...state,
        listaNoticiasSalvas: novaListaNoticiaSalva
      };
    case "noticia/excluir":
      action.noticia.salvo = null;
      novaListaNoticiaSalva = [...state.listaNoticiasSalvas];
      novaListaNoticiaSalva.splice(
        novaListaNoticiaSalva.findIndex(noticia => {
          return noticia.url == action.noticia.url;
        }),
        1
      );
      if (state.listaNoticias === state.listaNoticiasSalvas) {
        return {
          ...state,
          listaNoticiasSalvas: novaListaNoticiaSalva,
          listaNoticias: novaListaNoticiaSalva
        };
      } else {
        return {
          ...state,
          listaNoticiasSalvas: novaListaNoticiaSalva
        };
      }
    case "noticia/mostrarSalvas":
      return {
        ...state,
        listaNoticias: state.listaNoticiasSalvas,
        countryAtual: "fav"
      };
    case "sideMenu/show":
      return {
        ...state,
        sideMenuVisible: true
      };
    case "sideMenu/hide":
      return {
        ...state,
        sideMenuVisible: false
      };
    default:
      return state;
  }
}
