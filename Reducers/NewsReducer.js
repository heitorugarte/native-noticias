export default function reducer(
  state = {
    listaNoticias: [],
    listaNoticiasSalvas: [],
    sideMenuVisible: false
  },
  action
) {
  let novaLista = [];
  switch (action.type) {
    case "noticia/updateLista":
      novaLista = action.listaNoticias;
      return {
        ...state,
        listaNoticias: novaLista
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
      let indice = novaListaNoticiaSalva.findIndex(noticia => {
        return noticia.url == action.noticia.url;
      });
      novaListaNoticiaSalva.splice(indice, 1);
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
        listaNoticias: state.listaNoticiasSalvas
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
