import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeMuffin, addMuffin } from "../redux/MuffinsActions";

const Muffins = () => {
  const muffins = useSelector(state => state.muffinsreducer.muffins);
  const dispatch = useDispatch();
  const muffinClickHandle = id => {
    console.log("muffinClickHandle", id);
    dispatch(likeMuffin(id));
  };

  const addMuffinHandle = () => {
    const muffin = {
      id: 3,
      name: "Banana Muffin",
      likes: 0
    };
    dispatch(addMuffin(muffin));
  };
  return (
    <ul>
      {muffins.map(muffin => {
        return (
          <>
            <li key={muffin.id}>
              {muffin.name} {muffin.likes}
            </li>
            <button onClick={() => muffinClickHandle(muffin.id)}>Like</button>
          </>
        );
      })}
      <br />
      <button onClick={() => addMuffinHandle()}>Add Muffin</button>
    </ul>
  );
};

export default Muffins;
