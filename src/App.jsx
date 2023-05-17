import React, { useState } from "react";
import { Post } from "./Post";

function App() {
  const [page, setPage] = useState(1);

  const addPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <div>Page: {page}</div>
      <button onClick={addPage}>Add value</button>
      <hr />
      <Post page={page} />
    </div>
  );
}

export default App;
