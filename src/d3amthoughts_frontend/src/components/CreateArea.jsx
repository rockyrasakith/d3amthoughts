import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea({ handleAdd }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const [isExpanded, setExpanded] = useState(false);

  const handleTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleBody = (e) => {
    setNoteBody(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleAdd(noteTitle, noteBody);
    setNoteTitle("");
    setNoteBody("");
  };

  const expanded = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={noteTitle}
            onChange={handleTitle}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={noteBody}
          onChange={handleBody}
          onClick={expanded}
        />
          <Zoom in={isExpanded}>
            <Fab onClick={handleClick}>
              <Add />
            </Fab>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
