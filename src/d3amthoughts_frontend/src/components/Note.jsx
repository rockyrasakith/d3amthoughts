import React from "react";
import DeleteForever from "@material-ui/icons/DeleteForever";

function Note({ data, handleDelete }) {
  return (
    <>
      {data.map(({ title, content }, index) => (
        <div className="note" key={index} id={index}>
          <h1>{title}</h1>
          <p>{content}</p>
          <button onClick={(e) => handleDelete(e, index)}><DeleteForever /></button>
        </div>
      ))}
    </>
  );
}

export default Note;
