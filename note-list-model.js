(function(exports) {
  function NoteList() {
    this._list = [];
  };

  NoteList.prototype.readList = function() {
    return this._list
  };

  NoteList.prototype.addNoteToList = function (text) {
    var newnote = new Note(text);
    this._list.push(newnote);
  }

  exports.NoteList = NoteList
})(this);
