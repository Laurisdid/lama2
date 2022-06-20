function coltReducer(state, action) {
  let newState = action.payload;
  //console.log(action.type);
  switch (action.type) {
    case "sortID":
      newState = [...action.payload].sort((a, b) => {
        if (a.id > b.id) return 1;
        if (b.id > a.id) return -1;
        return 0;
      });
      break;
    case "sortKm":
      newState = [...action.payload].sort((a, b) => {
        //  console.log(action.payload)
        if (a.totalKm > b.totalKm) return 1;
        if (b.totalKm > a.totalKm) return -1;
        return 0;
      });
      break;
    case "reload":
      newState = [...action.payload].map((b, i) => ({ ...b, row: i }));
      break;
    default:
      newState = [...action.payload];
  }
  //console.log(newState);
  return newState;

}

export default coltReducer;
