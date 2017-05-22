$(document).ready(function(){
  $("tr.table-row").click(function() {
      var tableData = $(this).children("td").map(function() {
          return $(this).text();
      }).get();
      $("#recipent").text('Recipent: ' + $.trim(tableData[0]));
      $("#content").text($.trim(tableData[1]));
      $("#senttime").text('Senttime: ' + $.trim(tableData[2]));
      modal.style.display = "block";
      $(this).removeClass("highlight");

      });
});
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("row");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}