import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [newNote, setNewNote] = useState([]);

  const handleAdd = (title, body) => {
    setNewNote([...newNote, { title: title, content: body }]);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setNewNote((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateArea handleAdd={handleAdd} />
      <Note data={newNote} handleDelete={handleDelete} />
      <Footer />
    </>
  );
}

export default App;
