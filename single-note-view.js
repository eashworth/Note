(function(exports){
  function SingleNoteView(note){
    this._note = note
  }

  SingleNoteView.prototype.returnHTML = function(){
    return `<div>${this._note.read()}</div>`
  }
  exports.SingleNoteView = SingleNoteView
})(this)
