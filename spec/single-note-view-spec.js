function testSNVCanBeInstantiated() {
  try {
    let note = new Note("Testing that single note view can be instatiated")
    let singleNoteView = new SingleNoteView(note);
    assert.isTrue( singleNoteView.constructor === SingleNoteView );
  }
  catch(err) {
    return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
};

function testSNVOutputsHTMLString() {
  try {
    let text = "Testing that output is html string"
    let note = new Note(text);
    let snv = new SingleNoteView(note);
    assert.isTrue( snv.returnHTML() === `<div>${text}</div>` );
  }
  catch(err) {
    return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
};
