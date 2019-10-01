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