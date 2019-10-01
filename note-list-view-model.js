(function(exports){
  function NoteListView(notelist) {
    this._notelist = notelist
  }

  NoteListView.prototype.readNoteList = function() {
    var new_array = this._notelist._list.map(function(element) {
      return "<li><div>" + element._text + "</div></li>"
      });
    var concatenated_string = "<ul>" + new_array.join('') + "</ul>";
    return concatenated_string;
  }

  exports.NoteListView = NoteListView;
})(this);
