function colorReducer(state, action) {
    let newState;
  
    switch (action.type) {
      case 'go_pink':
          newState = 'pink';
          break;
      case 'go_y':
          newState = 'yellow';
          break;
      case 'change_color':
          newState = state === 'yellow' ? 'pink' : 'yellow';
          break;
      case 'change_color_to':
          newState = action.payload;
          break;
      default:
        newState = state;
    }
  
    return newState;
  }
  
  export default colorReducer;