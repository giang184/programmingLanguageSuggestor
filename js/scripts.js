$(document).ready(function() {
  $("form#programming").submit(function(event) {
    const name = $("#name").val();    
    const age = parseInt($("#age").val());
    const gender = $("select#gender").val();
    const sleep = $("select#sleep").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const color = $("input:radio[name=color]:checked").val();
    
    if(gender==='female') {
      if(thing==='shopping' && color!=='blue' ){
        statement = "Rachel";
      }
      else if(thing==='shopping' || thing==='eating' ) {
        statement = "Monica";
      }
      else if (thing ==='smoking'){
        statement = "Chandler";
      }
      else {
        statement = "Phoebe";
      }
    }
    else {
      if(thing ==='eating'){
        statement = "Joey";
      }
      else if(thing === 'smoking') {
        statement = "Chandler";
      }
      else if(thing==='shopping' || color==='pink' ) {
        statement = "Rachel";
      }
      else {
        statement = "Ross";
      }
    }
    


    //$("#match").append( color);
    $("#result").show();
    event.preventDefault();
  });
});