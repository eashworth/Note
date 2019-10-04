function testNoteList() {
  try {
    let notelist = new NoteList;
    assert.isTrue(notelist.readList() === notelist._list);
  }
  catch(err) {
    return "Error - " + arguments.calle.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
};

function testAddNoteToList() {
  try {
    notelist = new NoteList;
    notelist.addNoteToList("Test text")
    assert.isTrue(notelist._list[0]._text === "Test text");
  }
  catch(err) {
    return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
};
