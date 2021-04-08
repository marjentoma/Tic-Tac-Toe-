 var modal = document.getElementById("myModal");
 var close = document.getElementById("close");;
 const coordinates = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
 ];
 var p1 = 0;
 var p2 = 0;
 var turn = 1;

 function check(val) {
     let text = $('.space');
     for(let i = 0; i < coordinates.length; i++) {
         let count = 0;
         for(let j = 0; j < coordinates[i].length; j++) {
             if(text[coordinates[i][j]].innerHTML === val) {
                 count++;
             }
         }
         if(count == 3) {
             return true;
         }
     }
     return false;
 }

 function reset() {
     $(".space").text("");
     turn = 1;
 }
 $(document).ready(function() {
     let hasWinner = false;
     $(".space").click(function() {
         if($(this).text() === "") {
             if(turn === 1) {
                 $(this).text("𝐗");
                 if(check("𝐗")) {
                     p1++;
                     $("#s1").text(p1);
                     hasWinner = true;
                     $("#message").append("<h1> Player 1 wins! </h1>");
                 }
                 turn = 2;
             } else {
                 $(this).text("𝟎");
                 if(check("𝟎")) {
                     p2++;
                     $("#s2").text(p2);
                     hasWinner = true;
                     $("#message").append("<h1> Player 2 wins! </h1>");
                 }
                 turn = 1;
             }
             if(($('#one').text() == '𝐗' || $('#one').text() == '𝟎') && ($('#two').text() == '𝐗' || $('#two').text() == '𝟎') && ($('#three').text() == '𝐗' || $('#three').text() == '𝟎') && ($('#four').text() == '𝐗' || $('#four').text() == '𝟎') && ($('#five').text() == '𝐗' || $('#five').text() == '𝟎') && ($('#six').text() == '𝐗' || $('#six').text() == '𝟎') && ($('#seven').text() == '𝐗' || $('#seven').text() == '𝟎') && ($('#eight').text() == '𝐗' || $('#eight').text() == '𝟎') && ($('#nine').text() == '𝐗' || $('#nine').text() == '𝟎')) {
                 hasWinner = true;
                 $("#message").append("<h1> Its a Draw! </h1>");
             }
         }
         if(hasWinner) {
             $("#myModal").css("display", "block");
             $(window).click(function(event) {
                 if(event.target == modal || event.target == close) {
                     $("#myModal").css("display", "none");
                     $("#message").empty();
                 }
             });
             hasWinner = false;
             reset();
         }
     });
     $("#reset").click(function() {
         reset();
         p1 = 0;
         p2 = 0;
         $("#s1").text(p1);
         $("#s2").text(p2);
     });
 });