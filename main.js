window.onload = function(){

    var now = null,
          max = 710,
          input_area = document.getElementById("text_area"),
          output_area = document.getElementById("text_length"),
          nyuryoku_area = document.getElementById("nyuryoku");
  
    input_area.onkeyup = function(){
      now = ( max - input_area.value.length );
      output_area.innerText = now;
      nyuryoku_area.innerText = input_area.value.length;
      output_area.className = ( now < 0 ) ? "out" : "";
    }
  
  }