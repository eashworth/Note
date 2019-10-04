//
// (function(exports) {
//   function() {
//     function NoteController(NoteListView, NoteList) {
//       var notelist = new NoteList;
//       notelist.addNoteToList("favourite drink: mango lassi");
//       console.log(notelist)
//
//       var notelistview = new NoteListView(notelist);
//       document.getElementById('app').innerHTML = notelistview.readNoteList();
//     }
//   }
// exports.
// })(this);
//
// NoteController(NoteListView, NoteList);
(function(exports) {
  function NoteController(noteList) {
    this._noteList = noteList;
    // = notelist
    // noteListView
  }

  NoteController.prototype.insertHTMLToApp = function() {
      this._noteList.addNoteToList("favourite drink: mango lassi")
      var noteListView = new NoteListView(this._noteList);
      document.getElementById("app").innerHTML = noteListView.readNoteList();
  }

  exports.NoteController = NoteController
})(this);
