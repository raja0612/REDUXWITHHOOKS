const initialState = {
    response: {}
  };

const firstReducer = (state = initialState, action) => {
    switch (action.type) {
      case "api/loading":
        return { ...state, loading: true };
      case "api/success":
        const { response } = action.payload;
        return { ...state, loading: false, response };
      case "api/failure":
        const { error } = action;
        return { ...state, loading: false, error };
      default:
        return state;
    }
  };

  export default firstReducer;