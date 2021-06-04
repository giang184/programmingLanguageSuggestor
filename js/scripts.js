$(document).ready(function() {
  $("form#programming").submit(function(event) {
    const name = $("#name").val();    
    const age = parseInt($("#age").val());
    const gender = $("select#gender").val();
    const sleep = $("select#sleep").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const color = $("input:radio[name=color]:checked").val();


    if(sleep === 'early') {
      if(color==='red' || color==='blue'){
        $("#display1").text("Your primary language you should study is C++. This programming language is ideal to help you develop back end software.");
      }
      else {
        $("#display1").text("Your primary language you should study is Swift. This programming language is ideal to help you develop back end software.");
      }
    }
    else {
      if(color==='red' || color==='blue'){
        $("#display1").text("Your primary language you should study is Swift. This programming language is ideal to help you develop back end software.");
      }
      else {
        $("#display1").text("Your primary language you should study is C++. This programming language is ideal to help you develop back end software.");
      }
    }

    if(age > 30) {
      if(gender==='male' && animal==='dog' ){
        $("#display2").text("Additionally, you should learn Go and Ruby to be flexible in other areas of programming needs.");
      }
      else if(gender==='male' && animal==='cat') {
        $("#display2").text("Additionally, you should learn Go and C# to be flexible in other areas of programming needs.");
      }
      else if (gender==='female' && animal==='dog'){
        $("#display2").text("Additionally, you should learn Python and Ruby to be flexible in other areas of programming needs.");
      }
      else if (gender==='female' && animal==='cat'){
        $("#display2").text("Additionally, you should learn Python and C# to be flexible in other areas of programming needs.");
      }
      else {
        $("#display2").text("Additionally, you should learn Python and Go to be flexible in other areas of programming needs.");
      }
    }
    else {
      if(gender==='male' && animal==='dog' ){
        $("#display2").text("Additionally, you should learn Rust and Ruby to be flexible in other areas of programming needs.");
      }
      else if(gender==='male' && animal==='cat') {
        $("#display2").text("Additionally, you should learn Rust and C# to be flexible in other areas of programming needs.");
      }
      else if (gender==='female' && animal==='dog'){
        $("#display2").text("Additionally, you should learn JavaScript and Ruby to be flexible in other areas of programming needs.");
      }
      else if (gender==='female' && animal==='cat'){
        $("#display2").text("Additionally, you should learn JavaScript and C# to be flexible in other areas of programming needs.");
      }
      else {
        $("#display2").text("Additionally, you should learn Rust and JavaScript to be flexible in other areas of programming needs.");
      }
    }

    $("#result").show();
    event.preventDefault();
  });
});