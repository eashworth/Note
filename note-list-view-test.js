(function(exports) {
  function TestSingleNoteListView() {
    var notelist = new NoteList;
    notelist.addNoteToList("Test text");
    var notelistview = new NoteListView(notelist);

    if (notelistview.readNoteList() !== "<ul><li><div>Test text</div></li></ul>") {
      throw new Error("Test has failed")
    } else {
      console.log("Well done.")
    };
  };
  TestSingleNoteListView();
})(this);

(function(exports) {
  function testNoNoteListView() {
    var notelist = new NoteList;
    var notelistview = new NoteListView(notelist);

    if (notelistview.readNoteList() !== "<ul></ul>")  {
      throw new Error("Test has failed")
    } else {
      console.log("Well done.")
    };
  };
  testNoNoteListView();
})(this);

(function(exports) {
  function testMultipleNotesListView () {
    var notelist = new NoteList;

    notelist.addNoteToList("Test text")
    notelist.addNoteToList("Test text 2")

    var notelistview = new NoteListView(notelist);

    if(notelistview.readNoteList() !== "<ul><li><div>Test text</div></li><li><div>Test text 2</div></li></ul>") {
      throw new Error("Test has failed")
    } else {
      console.log("Well done.")
    };
  };

  testMultipleNotesListView();
})(this);
