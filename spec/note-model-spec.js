function testNoteInstantiatesWithText() {
  try {
    let note = new Note("I am a note");
    assert.isTrue(note._text === "I am a note");
  }
  catch(err) {
    return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
};

function testReadMethodReturnsNotetext() {
  try {
    let note = new Note("I am a note");
    assert.isTrue(note.read() === "I am a note");
  }
  catch(err) {
    return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
};
