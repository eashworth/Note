(function(exports){
  function testNoteInstantiatesWithText() {
    var note = new Note("I am a note");

     if (note.text !== "I am a note") {
       throw new Error("Test has failed");
     }
     else {
       console.log("Well done.")
     }
   };

   testNoteInstantiatesWithText();
 }) (this);
