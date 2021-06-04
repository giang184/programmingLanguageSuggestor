$(document).ready(function() {
  $("form#programming").submit(function(event) {
    const name = $("#name").val();    
    const age = parseInt($("#age").val());
    const gender = $("select#gender").val();
    const sleep = $("select#sleep").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const color = $("input:radio[name=color]:checked").val();

   
    $("#match").text(name + age+gender+sleep+animal+color);
    $("#result").show();
    event.preventDefault();
  });
});