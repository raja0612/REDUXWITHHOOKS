export const likeMuffin = (muffinId) => ({
    type: 'muffins/like',
    payload: { id: muffinId },
  });


  export const addMuffin = (muffin) => ({
      type: 'muffins/add',
      payload: {muffin: muffin}
  })