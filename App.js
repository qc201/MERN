import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Record from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import View from "./components/view";
import OnlyToday from "./components/onlyToday";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<OnlyToday />} />
        {/* <Route exact path="/" element={<RecordList />} /> */}
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/create" element={<Create />} />
        <Route path="/record" element={<Record />} />
      </Routes>
    </div>
  );
};

export default App;
