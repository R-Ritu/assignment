interface ReducerState {
  allPost?: Array<any>,
}
const initialState: ReducerState = {
  allPost: [],
};
const post = (
  state: any = initialState,
  action: { type: string; payload?: any },
) => {
  switch (action.type) {
    case 'ALL_POST':
      return { ...state, allPost: action.payload };
    case "ADD_POST":
      return { ...state, allPost: [...state.allPost, action.payload] }
    default:
      return state;
  }
};

export default post;
