import List "mo:base/List";
import Debug "mo:base/Debug";

actor d3amthoughts {

// Create a new data type that represents the kind of data for the notes
  public type Note = {
    title: Text;
    content: Text;
  };

// Create a new list called notes
  var notes: List.List<Note> = List.nil<Note>();

  public func createNote(titleText: Text, contentText: Text) {
    let newNote: Note = {
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);
    Debug.print(debug_show(notes));
  };

// Query function to read notes List.
  public query func readNotes(): async [Note] {
    return List.toArray(notes);
  }

};
