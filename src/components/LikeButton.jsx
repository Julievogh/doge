"use client";

import { useState } from "react";

function LikeButton() {
  const [localLikes, setLocalLikes] = useState(localLikes);
  function minusOne() {
    setLocalLikes(localLikes - 1);
  }
  return (
    <div>
      <button onClick={setLocalLikes}>--</button>
      {localLikes}
      <button onClick={setLocalLikes}>++</button>
    </div>
  );
}

export default LikeButton;
