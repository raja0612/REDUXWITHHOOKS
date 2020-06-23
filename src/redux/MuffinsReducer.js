const initialState = {
  muffins: [
    { id: 1, name: "Chocalte Muffin", likes: 0 },
    { id: 2, name: "Blueberry Muffin", likes: 0 }
  ]
};

function Muffinsreducer(state = initialState, action) {
  switch (action.type) {
    case "muffins/like":
      const { id } = action.payload;
      return {
        ...state,
        muffins: state.muffins.map(muffin => {
          if (muffin.id === id) {
            return { ...muffin, likes: muffin.likes + 1 };
          }
          return muffin;
        })
      };

    case "muffins/add":
      const { muffin } = action.payload;

      return { ...state, muffins: [...state.muffins, muffin] };

    default:
      return state;
  }
}

export default Muffinsreducer;
