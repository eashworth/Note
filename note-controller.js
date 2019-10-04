
(function(exports) {
  function() {
    function NoteController(NoteListView, NoteList) {
      var notelist = new NoteList;
      notelist.addNoteToList("favourite drink: mango lassi");
      console.log(notelist)

      var notelistview = new NoteListView(notelist);
      document.getElementById('app').innerHTML = notelistview.readNoteList();
    }
  }
exports.
})(this);

NoteController(NoteListView, NoteList);
