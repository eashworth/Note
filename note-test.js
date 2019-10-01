(function(exports){
  function testNoteInstantiatesWithText() {
    var note = new Note("I am a note");

     if (note._text !== "I am a note") {
       throw new Error("Test has failed");
     }
     else {
       console.log("Well done.")
     }
   };

   testNoteInstantiatesWithText();
 }) (this);

 (function(exports) {
   function testReadMethodReturnsNotetext() {
     var note = new Note("I am a note");

     if (note.read() !== "I am a note") {
       throw new Error("Test has failed");
     } else {
       console.log("Well done.")
     }
   };

   testReadMethodReturnsNotetext();
 }) (this);
