function testNoteControllerCanBeInstatiated() {
  try {
    let noteList = new NoteList;
    let noteController = new NoteController(noteList);
    assert.isTrue( noteController.constructor === NoteController );
  }
  catch(err) {
    return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
};

function testNoteControllerInsertsNewTextIntoAppElement() {
  try {
    let testHTML = "<ul><li><div>favourite drink: mango lassi</div></li></ul>"

    // .setAttribute("id", "app")
    let dummyDiv = document.createElement("div");
    // dummyDiv.innerText = "app"
    dummyDiv.id = "app";

    let body = document.getElementsByTagName("body");
    body.item(0).appendChild(dummyDiv);

    let noteList = new NoteList;
    // let noteListView = new NoteListView(noteList);
    let noteController = new NoteController(noteList);
    // document.getElementById("app").innerHTML = noteListView

    noteController.insertHTMLToApp();
    console.log(document.getElementById("app").innerHTML)
    console.log(testHTML)
    assert.isTrue(document.getElementById("app").innerHTML === testHTML);
    // remove dummy element from html.
    body.item(0).removeChild(dummyDiv);
  }
  catch(err) {
    return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
};


// function testNoteControllerInnerHTML(){
//     let innerHTML = "<ul><li><div>Favourite drink: seltzer</div></li></ul>";
//
//     try {
//         let noteList = new NoteList();
//         // // noteList.add(noteText);
//         // let noteListView = new NoteListView(noteList);
//         let noteController = new NoteController(noteList);
//         let body = document.getElementsByTagName("body");
//         let dummyElement = document.createElement("div");
//         dummyElement.id = "app";
//         body.item(0).appendChild(dummyElement);
//
//         noteController.insertHTMLToApp();
//        // let check1 = document.getElementById("app").innerHTML;
//        // let check2 = noteController.insertHTMLToApp();
//
//         assert.isTrue(document.getElementById("app").innerHTML === innerHTML)
//         body.item(0).removeChild(dummyElement);
//     }
//     catch(err) {
//         return "Error - " + arguments.callee.name + " : " + err;
//     }
//     return "Pass - " + arguments.callee.name;
// }
