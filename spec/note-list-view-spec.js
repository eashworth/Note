function testSingleNoteListView() {
  try {
    let notelist = new NoteList;
    notelist.addNoteToList("Test text");
    let notelistview = new NoteListView(notelist);
  }
  catch(err) {
    return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
};

function testNoNoteListView() {
  try {
    let notelist = new NoteList;
    let notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.readNoteList() === "<ul></ul>");
  }
    catch(err) {
      return "Pass - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
};

function testMultipleNotesListView () {
  try {
    let notelist = new NoteList;
    notelist.addNoteToList("Test text")
    notelist.addNoteToList("Test text 2")
    let notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.readNoteList() === "<ul><li><div>Test text</div></li><li><div>Test text 2</div></li></ul>");
  }
    catch(err) {
      return "Error - " + arguments.callee.name + " : " + err;
    }
  return "Pass - " + arguments.callee.name;
};
