import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Student from "./component/Student";
import AddStudent from "./component/AddStudent";
import EditStudent from "./component/EditStudent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </Router>
  );
};

export default App;
