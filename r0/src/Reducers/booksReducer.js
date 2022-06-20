function booksReducer(state, action) {
  let newState;
  switch (action.type) {
    case "get_from_server":
      newState = action.payload.map((b, i) => ({ ...b, row: i,show:true }));
      break;
    case "sortAZ":
      newState = [...state].sort((a, b) => {
        if (a.title > b.title) return 1;
        if (b.title > a.title) return -1;
        return 0;
      });
      break;
    case "sort17":
      newState = [...state].map((a) => a.price < 13 ? { ...a, show: true } : { ...a, show: false } );
      break;
    case "hide":
   //   console.log(action.payload,'payload');
      newState = [...state].map((b) => b.id === action.payload ? {...b, show: false} : {...b, show: true} )
      break;
    case "sortDEF":
      newState = [...state].sort((a, b) => a.row - b.row );
      break;
      case "reset":
      newState =[...state].map((a) => ({ ...a, show:true }));
      break;
      case "kaina":
     //   console.log('payload', action.payload)
        newState = [...state].map(o => o.price < action.payload ? {...o, show: true} : {...o, show: false} )
      break;
      case "sortPrice":
      newState = [...state].sort((a, b) => {
        if (a.price > b.price) return 1;
        if (b.price > a.price) return -1;
        return 0;
      });
      break;
      case "reload":
        newState = [...state].map((b, i) => ({ ...b, row: i,show:true }));
        break;

    default:
      newState = [...state];
  }

  return newState;
}

export default booksReducer;
