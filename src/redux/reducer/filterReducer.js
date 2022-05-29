const initialState = {
  state: false
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'FILTERITEMCLICK':
      return{
        ...state,state:action.payload
      }
    default:
      return state;
  }
}