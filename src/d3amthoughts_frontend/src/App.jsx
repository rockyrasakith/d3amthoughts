import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { d3amthoughts_backend } from "../../declarations/d3amthoughts_backend/";

function App() {
  const [newNote, setNewNote] = useState([]);

  const handleAdd = (title, body) => {
    d3amthoughts_backend.createNote(title, body);
    setNewNote([...newNote, { title: title, content: body }]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const notesArray = await d3amthoughts_backend.readNotes();
    setNewNote(notesArray);
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
