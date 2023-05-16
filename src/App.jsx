import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(1);

  const addValue = () => {
    setValue(value + 1);
  };

  return (
    <div className="App">
      <div>Value: {value}</div>
      <button onClick={addValue}>Add value</button>
    </div>
  );
}

export default App;
