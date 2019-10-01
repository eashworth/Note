(function (exports) {
  function testNoteList() {
    var notelist = new NoteList;

      if (notelist.readList() !== notelist._list) {
      throw new Error("Test has failed");
    } else {
      console.log("Well done.")
    };
  };
  testNoteList();
})(this);


(function(exports) {
  function testAddNoteToList() {
    var notelist = new NoteList;
    notelist.addNoteToList("Test text")
    
    if (notelist._list[0].text !== "Test text") {
      throw new Error("Test has failed");
    } else {
      console.log("Well done")
    };
  };
  testAddNoteToList();
})(this);