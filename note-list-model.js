(function(exports) {
  function NoteList() {
    this._list = [];
  };

  NoteList.prototype.readList = function() {
    return this._list
  };

  NoteList.prototype.addNoteToList = function (text) {
    this._list.push(text);
  }

  exports.NoteList = NoteList
})(this);
