$(document).ready(function() {
  $("form#programming").submit(function(event) {
    const name = $("#name").val();    
    const age = parseInt($("#age").val());
    const gender = $("select#gender").val();
    const sleep = $("select#sleep").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const color = $("input:radio[name=color]:checked").val();

    if(!name || !age)
    {
      alert("Please fill out your name and age.");
    }
    else
    {
      $("#nameDisplay").text(name);
      if(sleep === 'early') {
        if(color==='red' || color==='blue'){
          $("#display1").text("C++");
        }
        else {
          $("#display1").text("Java");
        }
      }
      else {
        if(color==='red' || color==='blue'){
          $("#display1").text("Java");
        }
        else {
          $("#display1").text("C++");
        }
      }

      if(age > 30) {
        if(gender==='male' && animal==='dog' ){
          $("#display2").text("Go");
          $("#display3").text("Ruby");
        }
        else if(gender==='male' && animal==='cat') {
          $("#display2").text("Go");
          $("#display3").text("C#");
        }
        else if (gender==='female' && animal==='dog'){
          $("#display2").text("Python");
          $("#display3").text("Ruby");
        }
        else if (gender==='female' && animal==='cat'){
          $("#display2").text("Python");
          $("#display3").text("C#");
        }
        else {
          $("#display2").text("Python");
          $("#display3").text("Go");
        }
      }
      else {
        if(gender==='male' && animal==='dog' ){
          $("#display2").text("Rust");
          $("#display3").text("Ruby");
        }
        else if(gender==='male' && animal==='cat') {
          $("#display2").text("Rust");
          $("#display3").text("C#");
        }
        else if (gender==='female' && animal==='dog'){
          $("#display2").text("JavaScript");
          $("#display3").text("Ruby");
        }
        else if (gender==='female' && animal==='cat'){
          $("#display2").text("JavaScript");
          $("#display3").text("C#");
        }
        else {
          $("#display2").text("Rust");
          $("#display3").text("JavaScript");
        }
      }

      $("#result").show();
      event.preventDefault();
    }
  });
});